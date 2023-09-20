import type { Serve } from "bun";

const fetch = (request: Request) : Response => {
    const { method,  url, headers } = request;
    const instanceURL = new URL(url);

    return new Response('Welcome to bun js !')
}

export default {
    port: process.env.SERVER_PORT,
    hostname: process.env.SERVER_NAME,
    fetch
} satisfies Serve