// import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";

import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import UserFetchingList from "./components/UserFetchingList";
import UserFetchingDetails from "./components/UserFetchingDetails";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="order-summary" element={<OrderSummary />}></Route>
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>

          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />}></Route>
            <Route path="admin" element={<Admin />}></Route>
          </Route>

          <Route path="usersfetchinglist" element={<UserFetchingList />}>
            <Route path=":userId" element={<UserFetchingDetails />}></Route>
          </Route>

          <Route
            path="usersfetchingdetails"
            element={<UserFetchingDetails />}
          ></Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;
