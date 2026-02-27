import { Box, Container, Typography } from "@mui/material";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                borderTop: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                py: 2.5,
                mt: "auto",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 1,
                    }}
                >
                    <Typography variant="caption" color="text.disabled">
                        © {year} Аврора Сервис — UI Kit
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                        Внутренняя документация компонентов
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}