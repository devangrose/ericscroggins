import Home from "views/Home/Home.js";
import Contact from "views/Contact/Contact.js";
import Speaker from "views/Speaker/Speaker.js";
import About from "views/About/About.js";
import Booking from "views/Booking/Booking.js";
import Coach from "views/Coach/Coach.js";
import Consultant from "views/Consultant/Consultant.js";
import Resources from "views/Resources/Resources.js";
import MeetingPlanner from "views/MeetingPlanner/MeetingPlanner.js";

var indexRoutes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact},
  { path: "/speaker", name: "Speaker", component: Speaker},
  { path: "/about", name: "About", component: About},
  { path: "/booking", name: "Booking", component: Booking},
  { path: "/coach", name: "Coach", component: Coach},
  { path: "/resources", name: "Resources", component: Resources},
  { path: "/meeting-planner", name: "Meeting Planner", component: MeetingPlanner},
  { path: "/consultant", name: "Consultant", component: Consultant}
];

export default indexRoutes;
