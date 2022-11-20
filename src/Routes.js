import { Component } from "react";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";
import Post from "./pages/PostPage";


const routes = [
    {path:"/blogs/:id" , component : Blog},
    {path:"/blogs", component : BlogPage},
    {path:"/profile" , component : Profile},
    {path:"/about-us" , component : AboutUs},
    {path:"/post/:id([0-9])?" , component : Post},
    {path:'/' , component : HomePage , exact: true},
    { component: NotFound},
    
];

export default routes;