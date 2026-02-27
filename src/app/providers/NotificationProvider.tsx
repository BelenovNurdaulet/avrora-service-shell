import React, {useEffect, useState} from "react";
import {Alert, Snackbar} from "@mui/material";
import {NotificationContext as NotificationContext1} from "./NotificationContext.tsx";

type Notification = {
    id: number;
    message: string;
};

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<Notification[]>([]);

    const push = (message: string) => {
        const id = Date.now();

        setItems((prev) => [...prev, { id, message }]);

        setTimeout(() => {
            setItems((prev) => prev.filter((n) => n.id !== id));
        }, 5000);
    };

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const res = await fetch("/notifications");
                if (!res.ok) return;

                const data: { message?: string } = await res.json();
                if (data.message) push(data.message);
            } catch {

            }
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <NotificationContext1 value={{ push }}>
            {children}

            {items.map((n) => (
                <Snackbar
                    key={n.id}
                    open
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <Alert severity="info" variant="filled">
                        {n.message}
                    </Alert>
                </Snackbar>
            ))}
        </NotificationContext1>
    );
}