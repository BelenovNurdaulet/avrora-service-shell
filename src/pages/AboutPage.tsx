import { Box, Container, Divider, Typography } from "@mui/material";

const COMPONENTS = [
    "Button", "Input", "Checkbox", "Select",
    "TextArea", "Toggle", "Typography", "Card",
];

export function AboutPage() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {/* Заголовок */}
                <Box>
                    <Typography variant="overline" color="text.disabled" sx={{ letterSpacing: 2 }}>
                        Документация
                    </Typography>
                    <Typography variant="h4" fontWeight={700} sx={{ mt: 0.5, mb: 1.5 }}>
                        UI Kit — Аврора Сервис
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.8 }}>
                        Внутренняя библиотека UI-компонентов компании <strong>Аврора Сервис</strong>.
                        Создана для унификации интерфейсов продуктов и ускорения разработки.
                        Каждый компонент доступен в интерактивном конструкторе — можно менять пропсы
                        и сразу видеть результат.
                    </Typography>
                </Box>

                <Divider />

                <Box>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                        Компоненты в каталоге
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {COMPONENTS.map((name) => (
                            <Box
                                key={name}
                                sx={{
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    bgcolor: "action.hover",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 12,
                                    color: "text.secondary",
                                }}
                            >
                                {name}
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Divider />
                <Box>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        Стек
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                        Vite · React · TypeScript · CSS Modules · MUI (только для внутреннего UI каталога) ·
                        Module Federation (Vite + @originjs/vite-plugin-federation) · React Router v6 ·
                        Apollo Client (GraphQL) · MSW (Mock Service Worker) · Mitt (events)
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}