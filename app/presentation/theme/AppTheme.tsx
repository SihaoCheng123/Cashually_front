import {DefaultTheme} from "react-native-paper";

export const AppTheme = {
    ...DefaultTheme,
    colors: {
        background: "#F4F4F4",
        primary: "#98FF98",
        secondary: "#919FFF",
        tertiary: "#FFD5A3",
        grey: "#717171",
        account: "#2C2C2E",
        white: "#FFFFFF",
        black: "#000000",
    },
    fonts:{
        ...DefaultTheme.fonts,
        regular: 'Poppins-Regular',
        bold: 'Poppins-Bold',
        logo: 'GreatVibes-Regular',
    }
}