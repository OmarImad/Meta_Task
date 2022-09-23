import "./App.css"
import AddUser from "./components/addUser/AddUser"
import EditUser from "./components/editUser/EditUser"
import ListUser from "./components/listUser/ListUser"
import Navbar from "./components/navBar/Navbar"
import SideBar from "./components/sideBar/SideBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar />

      <Router forceRefresh={true}>
        <Switch>
          <Route key={1} exact path="/">
            <AddUser />
          </Route>

          <Route key={2} exact path="/listuser">
            <ListUser />
          </Route>

          <Route key={3} exact path="/edituser">
            <EditUser />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
