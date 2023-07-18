import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
            light: "#293241"
        },
        secondary: {
            main: "#52b788",
            light: "#95d5b2",
        }, text: {
            default: '#191516',
        },
        gray: {
            main: '#565656'
        },
        black: {
            main: '#191516'
        }

    }, typography: {
        fontFamily: ['Helvetica Neue', 'Roboto'],
    }
})

