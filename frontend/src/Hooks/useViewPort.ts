import { type Theme, useMediaQuery } from "@mui/material"

export const useViewPort =() => {
    const isMobile = useMediaQuery((theme: Theme) => {
        return theme.breakpoints.down("sm")
    })
    const isDesktop = useMediaQuery((theme: Theme) => {
        return theme.breakpoints.up("md")
    })
    return {isMobile, isDesktop}
}