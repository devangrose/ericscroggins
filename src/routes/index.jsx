import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import Home from "views/Home/Home.js";
import Contact from "views/Contact/Contact.js";
import Speaker from "views/Speaker/Speaker.js";
import About from "views/About/About.js";
import Booking from "views/Booking/Booking.js";
import Coach from "views/Coach/Coach.js";

var indexRoutes = [
  { path: "/signup-page", name: "SignupPage", component: SignupPage },
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact},
  { path: "/speaker", name: "Speaker", component: Speaker},
  { path: "/about", name: "About", component: About},
  { path: "/booking", name: "Booking", component: Booking},
  { path: "/coach", name: "Coach", component: Coach},
];

export default indexRoutes;
