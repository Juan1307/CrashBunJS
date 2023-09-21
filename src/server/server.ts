import type { Serve } from "bun";

const fetch = (request: Request) : Response => {
    const { method,  url, headers } = request;
    const instanceURL = new URL(url);

    const pathname = instanceURL.pathname;
    console.log({ method }); // method fetch

    if(pathname === '/') {
        return new Response('Welcome to bun js')
    }

    if(pathname === '/home') {
        return new Response(`
        <h1> We are at home page</h1> 
        </br>
        <pre style="width:10rem; text-wrap:pretty">${ JSON.stringify(headers) }</pre>
        `,{
            headers:{
                'Content-Type':'text/html'
            }
        });
    }

    if(pathname === '/error') {
        throw new Error('This is a custom error');
    }

    return new Response('404');
}

export default {
    port: process.env.SERVER_PORT,
    hostname: process.env.SERVER_NAME,
    fetch
} satisfies Serve