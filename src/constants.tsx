import { FooterHeight } from "./components/Footer";
import { NavBarHeight } from "./components/NavBar";

export { FooterHeight } from "./components/Footer";
export { NavBarHeight } from "./components/NavBar";

export const MainHeight = `calc(100vh - ${NavBarHeight} - ${FooterHeight})`;
