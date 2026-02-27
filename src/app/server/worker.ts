import { setupWorker } from "msw/browser";
import type { RequestHandler } from "msw";

export async function startWorker() {
    let handlers: RequestHandler[] = [];

    try {
        const remoteHandlers: unknown = await import("catalog/handlers");

        if (
            remoteHandlers &&
            typeof remoteHandlers === "object" &&
            "handlers" in remoteHandlers &&
            Array.isArray((remoteHandlers as { handlers?: unknown }).handlers)
        ) {
            handlers = (remoteHandlers as { handlers: RequestHandler[] }).handlers;
        }
    } catch (error: unknown) {
        console.warn("Remote catalog is not available. Starting MSW without remote handlers.", error);
    }

    const worker = setupWorker(...handlers);

    await worker.start({
        serviceWorker: { url: "/mockServiceWorker.js" },
        onUnhandledRequest: "bypass",
    });
}