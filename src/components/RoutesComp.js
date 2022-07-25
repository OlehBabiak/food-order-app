import { Routes, Route } from "react-router-dom";
import RestaurantsNavPage from "./Layout/Home/RestaurantsNavPage";
import RestOrderPageCreator from "./restaurants/RestOrderPageCreator";
import { ApiPath } from "../common/enums/api/api-path.enum";

const RoutesComp = () => {
  return (
    <Routes>
      <Route
        path={ApiPath.MAC}
        element={<RestOrderPageCreator path={ApiPath.MAC} />}
      />
      <Route
        path={ApiPath.KFC}
        element={<RestOrderPageCreator path={ApiPath.KFC} />}
      />
      <Route
        path={ApiPath.BIG_BURGER}
        element={<RestOrderPageCreator path={ApiPath.BIG_BURGER} />}
      />
      <Route
        path={ApiPath.TASTY_BURGER}
        element={<RestOrderPageCreator path={ApiPath.TASTY_BURGER} />}
      />
      <Route path={ApiPath.ROOT} element={<RestaurantsNavPage />}/>
    </Routes>
  );
};

export default RoutesComp;
