import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx";



async function prepare() {
    const { startWorker } = await import("./app/server/worker.ts");
    await startWorker();
}

prepare().then(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <App/>
        </StrictMode>
    );
});
