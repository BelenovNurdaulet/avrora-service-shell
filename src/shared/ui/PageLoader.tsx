import { Box, CircularProgress, Typography } from "@mui/material";

interface PageLoaderProps {
    message?: string;
}

export function PageLoader({ message = "Загрузка..." }: PageLoaderProps) {
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
                color: "text.disabled",
            }}
        >
            <CircularProgress size={32} thickness={3} />
            <Typography variant="body2" color="text.disabled">
                {message}
            </Typography>
        </Box>
    );
}