import { useContext } from "react";

import {NotificationContext} from "./NotificationContext.tsx";

export const useNotification = () => {
    const ctx = useContext(NotificationContext);
    if (!ctx) throw new Error("NotificationProvider not found");
    return ctx;
};