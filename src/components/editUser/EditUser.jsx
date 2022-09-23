import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { FaImages } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import API_URL from "../../Api"
import "./editUser.css"

function EditUser() {
  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [lastName, setLastName] = useState("")
  const [checkBox, setCheckBox] = useState("")

  const fileInput = useRef()
  const selectFile = () => {
    fileInput.current.click()
  }

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
      await axios.post(`${API_URL}/users/1`, userData)
    } catch (e) {}
  }

  useEffect(() => {}, [])
  return (
    <div id="app">
      <section className="body">
        <div className="details">
          <h4>New User Details</h4>
          <hr />

          <form action="">
            <div className="left">
              <div className="form-group">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="right">
              <div className="form-group">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => setLastName(e.target.value)}
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
                <label for="manager">Employee</label>

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
        <div className="edit-user">
          <button
            type="submit"
            onClick={() => {
              fetchData()
              history.push("/listuser")
            }}
          >
            Edit User
          </button>
        </div>

        <div className="cancel-user">
          <button onClick={() => history.push("listuser")}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditUser;
