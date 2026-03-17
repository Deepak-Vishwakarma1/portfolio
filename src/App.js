import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import TechSkill from "./components/techskill/TechSkill"
import Skill from "./components/techskill/Skill"
import certificates from "./components/certification/certificates"
import Project from "./components/project/Project"



function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/skill' component={Skill} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/certificates' component={certificates} />
          <Route exact path='/project' component={Project} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
