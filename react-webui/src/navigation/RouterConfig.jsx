import {Routes, Route} from "react-router-dom"
import { AuthRoute } from "./AuthRoute.jsx";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import { useSelector } from "react-redux";
import { AutoComplete } from "../pages/AutoComplete/AutoComplete.jsx";
import { UserForm } from "../pages/UserForm/UserForm.jsx";
import { UserForm1 } from "../pages/UserForm/UserForm1.jsx";
import { UserInfo } from "../pages/UserInfo/UserInfo.jsx";
import { Signup } from "../pages/Signup/Signup.jsx";
import  Product from "../pages/Product/Product.jsx";
import Layout from "./Layout.jsx";


const RouterConfig = () => {
  const userToken = useSelector((state) => state.AppReducer.userInfo);
  console.log(
      "Route config token from local storage :" + JSON.stringify(userToken)
  );

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="landing" element={<Landing />} />
          <Route path="users" element={<UserInfo />} />
          <Route path="autocomplete" element={<AutoComplete />} />
          <Route path="userform" element={<UserForm />} />
          <Route path="userform1" element={<UserForm1 />} />
          <Route path="product" element={<Product />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
  );
};
const RouterConfigbkp = () => {
  const userToken = useSelector((state) => state.AppReducer.userInfo);
  console.log(
      "Route config token from local storage :" + JSON.stringify(userToken)
  );

  return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <AuthRoute
              path="/autocomplete"
              isTokenAvailable={userToken}
              component={AutoComplete}
          />
          <AuthRoute
              path="/users"
              isTokenAvailable={userToken}
              component={UserInfo}
          />
          <AuthRoute
              path="/landing"
              isTokenAvailable={userToken}
              component={Landing}
          />
          <AuthRoute
              path="/userform"
              isTokenAvailable={userToken}
              component={UserForm}
          />
          <AuthRoute
              path="/userform1"
              isTokenAvailable={userToken}
              component={UserForm1}
          />
          <AuthRoute
              path="/product"
              isTokenAvailable={userToken}
              component={Product}
          />
        </Switch>
      </div>
  );
};

export { RouterConfig };
