import React from "react"
import "./sidebar.css"
import {
  FaChartLine,
  FaDatabase,
  FaHome,
  FaSearch,
  FaUpload,
  FaUsers
} from "react-icons/fa"
import { GoGear } from "react-icons/go"

function SideBar() {
  return (
    <>
      <div id="app">
        <section id="slider">
          <ul>
            <li>
              <div className="search">
                <FaSearch />
              </div>
            </li>
            <li>
              <div className="home">
                <FaHome />
              </div>
            </li>
            <li>
              <div className="database">
                <FaDatabase />
              </div>
            </li>
            <li>
              <div className="chart">
                <FaChartLine />
              </div>
            </li>
            <li>
              <div className="upload">
                <FaUpload />
              </div>
            </li>
            <li>
              <div className="user">
                <FaUsers />
              </div>
            </li>
            <li>
              <div className="setting">
                <GoGear />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default SideBar;
