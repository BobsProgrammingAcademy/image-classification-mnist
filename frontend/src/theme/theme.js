import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: 'rgb(21, 30, 41)',
            paper: 'rgb(35, 49, 68)',
        },
        primary: {
            main: 'rgb(67, 160, 72)',
            light: 'rgb(163, 191, 243)',
            dark: 'rgb(31, 102, 239)',
            contrastText: 'rgb(235, 234, 239)',
        },
        secondary: {
            main: 'rgba(255, 241, 118, 0.7)',
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.95)',
            secondary: 'rgba(255, 255, 255, 0.5)',
        },
        success: {
            main: 'rgb(111, 214, 145)',
            light: 'rgb(131, 231, 168)',
            dark: 'rgb(67, 160, 71)',
            contrastText: 'rgb(235, 234, 239)',
        },
        warning: {
            main: 'rgb(242, 175, 87)',
            light: 'rgb(245, 205, 130)',
            dark: 'rgb(251, 138, 0)',
            contrastText: 'rgb(235, 234, 239)',
        },
        error: {
            main: 'rgb(237, 103, 98)',
            light: 'rgb(240, 135, 132)',
            dark: 'rgb(229, 56, 53)',
            contrastText: 'rgb(235, 234, 239)',
        },
        info: {
            main: 'rgb(142, 221, 229)',
            light: 'rgb(183, 238, 242)',
            dark: 'rgb(92, 205, 219)',
            contrastText: 'rgb(235, 234, 239)',
        },
        divider: 'rgb(85, 89, 110)',
    },
    typography: {
        button: {
            fontWeight: 600,
        },
        fontFamily: '"Montserrat", sans-serif',
        fontSize: 13,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.25,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.25,
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.25,
        },
        h4: {
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: 1.25,
        },
        h5: {
            fontSize: '1.0625rem',
            fontWeight: 500,
            lineHeight: 1.25,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.25,
        },
        overline: {
            fontWeight: 600,
        },
    },
});

export default theme;