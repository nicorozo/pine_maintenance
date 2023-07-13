import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
            light: "#293241"
        },
        secondary: {
            main: "#40916C",
            light: "#1B4332",
        }, text: {
            default: '#FFC0CB',
        }

    }, typography: {
        fontFamily: ['Helvetica Neue', 'Roboto'],
    }
})

