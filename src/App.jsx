import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./page/mainPage/mainPage";
import { FullPage } from "./page/fullPage/fullPage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/city"} element={<FullPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
