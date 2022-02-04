import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {

const auth = useAuth()

  return (
    <nav className="primary-nav">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/usersfetchinglist/1'>Users</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      {
        !auth.user && (
          <NavLink to='/login'>Login</NavLink>
        )
      }
    </nav>
  );
};
