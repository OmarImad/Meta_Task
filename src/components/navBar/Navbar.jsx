import "./navbar.css"
import { FaBars, FaUserAlt } from "react-icons/fa"

function Navbar() {
  return (
    <div id="app">
      <section className="nav">
        <nav className="navbar navba">
          <div className="collapse">
            <div className="bar">
              <FaBars />
            </div>

            <div className="information">
              <div className="name">
                <h4>RENEE MCKELVEY</h4>
                <span>Account Settings</span>
              </div>
              <div className="image">
                <FaUserAlt />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Navbar;
