import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-nextjs-boon2187",
    apiKey: process.env.API_KEY,
});