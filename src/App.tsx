import {AppRouter} from "./app/router/AppRouter.tsx";
import {NotificationProvider} from "./app/providers/NotificationProvider.tsx";

export default function App() {
    return (
        <NotificationProvider>
            <AppRouter/>
        </NotificationProvider>
    )
};
