// material
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});
theme = responsiveFontSizes(theme);
export default theme;
