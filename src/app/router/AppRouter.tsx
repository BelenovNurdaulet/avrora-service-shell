import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Box, Container} from "@mui/material";



import { Header } from "../../widgets/Header.tsx";
import {Footer} from "../../widgets/Footer.tsx";
import { ErrorBoundary } from "../../shared/ui/ErrorBoundary.tsx";
import { ROUTES } from "../../shared/config/routes.ts";
import { PageLoader } from "../../shared/ui/PageLoader.tsx";
import {AboutPage} from "../../pages/AboutPage.tsx";


const ComponentPage = lazy(() =>
    import("catalog/ComponentPage").catch(() => ({
        default: () => (
            <Box sx={{ color: "text.disabled" }}>
                Каталог недоступен — remote не подключён
            </Box>
        ),
    }))
);

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />

            <Box
                component="main"
                sx={{
                    flex: 1,
                    minHeight: 0,
                    display: "flex",
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        flex: 1,
                        minHeight: 0,
                        display: "flex",
                    }}
                >
                    {children}
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
export function AppRouter() {
    return (
        <BrowserRouter>
            <AppLayout>
                <ErrorBoundary>
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route index element={<Navigate to={ROUTES.COMPONENTS} replace />} />
                            <Route
                                path={`${ROUTES.COMPONENTS}/*`}
                                element={
                                    <ErrorBoundary>
                                        <ComponentPage />
                                    </ErrorBoundary>
                                }
                            />
                            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                            <Route path="*" element={<Navigate to={ROUTES.COMPONENTS} replace />} />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </AppLayout>
        </BrowserRouter>
    );
}