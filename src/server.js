import express from "express";
import cors from "cors";
import chalk from "chalk";
import Table from "cli-table3";
import { startNgrok } from "./utils/ngrokManager.js";
import webflowClientMiddleware from "./middleware/webflowClientMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import sitesRoutes from "./routes/sitesRoutes.js";
import collectionsRoutes from "./routes/collectionRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.use("/", authRoutes);
app.use("/api/sites", webflowClientMiddleware, sitesRoutes);
app.use("/api/collections", webflowClientMiddleware, collectionsRoutes);
app.use("/api/items", webflowClientMiddleware, itemRoutes);

const startServer = async () => {
  try {
    const ngrokUrl = await startNgrok(PORT);
    const table = new Table({
      head: ["Location", "URL"],
      colWidths: [30, 60],
    });
    table.push(
      ["Development URL (Frontend)", "http://localhost:3000"],
      ["Development URL (Backend)", `http://localhost:${PORT}`],
      ["Auth Callback URL", `${ngrokUrl}/auth/callback`]
    );
    console.log(table.toString());

    if (!process.env.SITE_TOKEN) {
      console.log(
        chalk.blue.inverse("\n\nNOTE:"),
        chalk.blue("Update your Redirect URI in your Webflow app settings.")
      );
    }

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server with Ngrok", error);
    process.exit(1);
  }
};

startServer();
