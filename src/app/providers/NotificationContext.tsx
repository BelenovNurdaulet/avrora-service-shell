import {createContext} from "react";

type NotificationApi = {
    push: (message: string) => void;
};
export const NotificationContext = createContext<NotificationApi | null>(null);