import { Component, type ErrorInfo, type ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    override componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("[ErrorBoundary]", error, info.componentStack);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    override render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback;

            return (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1,
                        gap: 2,
                        minHeight: 320,
                        px: 3,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" color="error">
                        Что-то пошло не так
                    </Typography>
                    <Typography variant="body2" color="text.disabled" sx={{ maxWidth: 400 }}>
                        {this.state.error?.message ?? "Неизвестная ошибка"}
                    </Typography>
                    <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={this.handleReset}
                    >
                        Попробовать снова
                    </Button>
                </Box>
            );
        }

        return this.props.children;
    }
}