import Home from "./sections/home"
import Missions from "./sections/missions"
import Blogs from "./sections/blogs"
import Instructors from "./sections/instructors"
import Testimonials from "./sections/testimonials"
import "./dashboard.css"

export default function Dashboard() {
    return (
      <>
          <Home />
          <Blogs />
          <Missions />
          <Instructors />
          <Testimonials />
      </> 
    )
}