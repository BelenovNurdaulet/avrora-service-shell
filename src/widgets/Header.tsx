import { NavLink } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import {ROUTES} from "../shared/config/routes.ts";




const NAV_LINKS = [
    { to: ROUTES.COMPONENTS, label: "Компоненты" },
    { to: ROUTES.ABOUT,   label: "О проекте" },
] as const;

const navLinkSx = {
    textDecoration: "none",
    color: "text.secondary",
    fontSize: 14,
    fontWeight: 500,
    px: 1.5,
    py: 0.5,
    borderRadius: 1,
    transition: "color 0.15s, background 0.15s",
    "&:hover": {
        color: "text.primary",
        bgcolor: "action.hover",
    },
    "&.active": {
        color: "primary.main",
        fontWeight: 600,
    },
} as const;

export function Header() {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
                color: "text.primary",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ gap: 4, minHeight: 56 }}>

                    <NavLink
                        to={ROUTES.ROOT}
                        style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 8 }}
                    >
                        <Box
                            component="img"
                            src="/favicon.svg"
                            alt="Аврора Сервис"
                            sx={{ width: 32, height: 32, borderRadius: 2, display: "block" }}
                        />
                        <Box>
                            <Typography
                                variant="subtitle2"
                                fontWeight={700}
                                sx={{ lineHeight: 1.1, letterSpacing: "-0.3px" }}
                            >
                                Аврора Сервис
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ color: "text.disabled", fontSize: 10, lineHeight: 1 }}
                            >
                                UI Kit
                            </Typography>
                        </Box>
                    </NavLink>

                    <Box component="nav" sx={{ display: "flex", gap: 0.5, ml: "auto" }}>
                        {NAV_LINKS.map(({ to, label }) => (
                            <Box
                                key={to}
                                component={NavLink}
                                to={to}
                                sx={navLinkSx}
                            >
                                {label}
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}