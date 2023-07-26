import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Suspense } from "react";
import { useTheme } from "./styles/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
function App() {
  const { theme, switchTheme } = useTheme();
  const bool = true;
  return (
    <div className={classNames('App', {hovered:true, selected: false}, [theme])}>
      <button onClick={switchTheme}>Switch Theme</button>

      <Link to={"/"}>MAIN</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
