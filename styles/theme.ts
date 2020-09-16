import { theme, DefaultTheme} from '@chakra-ui/core'


const customTheme: DefaultTheme = {
    ...theme,
    fonts: {
        body: 'Poppins, system-ui, sans-serif',
        heading: 'Poppins, system-ui, sans-serif',
        mono: 'Poppins, monospace'
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700,
    },
    radii: {
        ...theme.radii,
        sm:'5px',
        md: '8px',
    },
    fontSizes: {
        ...theme.fontSizes,
        '5xl': '48px',
        '6xl': '54px',
    },
    colors: {
        ...theme.colors,
        red: {
            ...theme.colors.red,
            400: '#EF233C',
            500: '#D80032',
        },
        gray: {
            ...theme.colors.gray,
            100: '#EDF2F4',
            300: '#e1e1e6',
            500: '#E5E5E5',
            600: '#8D99AE',
            700: '#202024',
            800: '#121214'
        },
        orange: {
            ...theme.colors.orange,
            400: '#ec6231'
        },

        yellow: {
            ...theme.colors.yellow,
            "200": '#ffff47'
        }
    },
}

export default customTheme;