import ngrok from 'ngrok';

export const startNgrok = async (port) => {
  try {
    const url = await ngrok.connect({
      addr: port,
      authtoken: process.env.NGROK_AUTH_TOKEN,
      subdomain: process.env.NGROK_SUBDOMAIN, // Optional: Specify a custom subdomain
    });
    console.log(`ngrok tunnel opened at: ${url}`);
    return url;
  } catch (error) {
    console.error('Error starting ngrok:', error);
    throw new Error('Failed to start ngrok');
  }
};
