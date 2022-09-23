import React, { useEffect, useRef, useState } from "react"
import { FaImages } from "react-icons/fa"
import "./addUser.css"
import axios from "axios"
import API_URL from "../../Api"
import { useHistory } from "react-router-dom"

function AddUser() {
  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [lastName, setLastName] = useState("")
  const [checkBox, setCheckBox] = useState("")

  const userData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    userName: userName,
    Password: Password,
    checkBox: checkBox
  }

  const history = useHistory()

  const fetchData = async () => {
    try {
      await axios.post(`${API_URL}/users`, userData)
    } catch (e) {}
  }

  useEffect(() => {}, [])

  const fileInput = useRef()
  const selectFile = () => {
    fileInput.current.click()
  }
  return (
    <div id="app">
      <section className="body">
        <div className="details">
          <h4>New User Details</h4>
          <hr />

          <form action="" onSubmit={fetchData(userData)}>
            <div className="left">
              <div className="form-group">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstname"
                  type="text"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="right">
              <div className="form-group">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                />
              </div>

              <div className="" style={{ marginTop: ".7rem" }}>
                <input
                  onChange={(e) => setCheckBox(e.target.value)}
                  type="radio"
                  id="manager"
                  name="checkbox"
                  value="Manager"
                  checked
                />
                <label for="manager">Manger</label>

                <input
                  onChange={(e) => setCheckBox(e.target.value)}
                  type="radio"
                  id="Employee"
                  name="checkbox"
                  value="Employee"
                  style={{ marginLeft: " 1rem" }}
                  checked
                />
                <label for="Employee">Employee</label>
              </div>
            </div>
          </form>
        </div>

        <div className="image-area">
          <h4>Profile Picture</h4>
          <hr />

          <div className="image">
            <FaImages />
          </div>

          <div className="select">
            <div className="select-image" onClick={selectFile}>
              Select Image
            </div>
            <input ref={fileInput} type="file" id="file" name="file" hidden />
          </div>
        </div>
      </section>

      <hr style={{ marginTop: "2rem", marginLeft: "135px" }} />

      <div className="buttons">
        <div className="add-user">
          <button
            type="submit"
            onClick={() => {
              fetchData()
              history.push("/listuser")
            }}
          >
            Add User
          </button>
        </div>

        <div className="cancel-user">
          <button>Cancel User</button>
        </div>
      </div>
    </div>
  )
}

export default AddUser;
