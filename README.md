# Autoblogger

Autoblogger is a simple app that allows users to generate blog posts using ChatGPT and automatically publish them to a Webflow CMS collection.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/autoblogger.git
    cd autoblogger
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add your environment variables:

    ```plaintext
    WEBFLOW_CLIENT_ID=your_webflow_client_id
    WEBFLOW_SECRET=your_webflow_client_secret
    SERVER_HOST=https://XXXX.ngrok.io
    PORT=3000
    CHATGPT_API_KEY=your_chatgpt_api_key
    WEBFLOW_COLLECTION_ID=your_webflow_collection_id
    ```

4. Start ngrok to expose your local server:

    ```bash
    ngrok http 3000
    ```

5. Update your Webflow app settings to use the ngrok forwarding URL as the redirect URI.

6. Start the server:

    ```bash
    npm start
    ```

7. Open your browser and navigate to the ngrok forwarding URL.

## Deployment

1. Login to Heroku:

    ```bash
    heroku login
    ```

2. Create/Open a Heroku app:

    ```bash
    heroku create/open your-app-name
    ```

3. Deploy to Heroku:

    ```bash
    git push heroku main
    ```

4. Set environment variables on Heroku:

    ```bash
    heroku config:set WEBFLOW_CLIENT_ID=your_webflow_client_id
    heroku config:set WEBFLOW_SECRET=your_webflow_client_secret
    heroku config:set SERVER_HOST=https://XXXX.ngrok.io
    heroku config:set CHATGPT_API_KEY=your_chatgpt_api_key
    heroku config:set WEBFLOW_COLLECTION_ID=your_webflow_collection_id
    ```

5. Connect Heroku to GitHub:
    - Go to the Heroku dashboard.
    - Select your app.
    - Go to the "Deploy" tab.
    - Connect to GitHub and select your repository.
    - Enable automatic deploys.

## Usage

1. Navigate to your Heroku app URL or the ngrok forwarding URL.
2. Authenticate with Webflow.
3. Use the form to generate a blog post.
4. Check the Webflow CMS to see the new blog post created.
