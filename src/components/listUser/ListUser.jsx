import React, { useEffect, useState } from "react"
import "./listUser.css"
import { FaPen, FaTrashAlt } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import DeletForm from "../deletForm/DeletForm"
import axios from "axios"
import API_URL from "../../Api"

function ListUser() {
  const [click, setClick] = useState(false)
  const [search, setSearch] = useState("")
  const history = useHistory()
  const [list, setList] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`)
      setList(response.data.payload)
    } catch (e) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div id="app">
      <section className="body-search">
        <h3>SEARCH</h3>
        <div className="form">
          <form action="">
            <div className="form-group">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="first_name"
                placeholder="First name"
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="last_name"
                placeholder="Last name"
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="email"
                placeholder="Email"
              />
            </div>
          </form>
        </div>

        <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />

        <div className="table-area">
          <h3>Users</h3>

          <table>
            {list?.length
              ? list
                  .filter((item) => {
                    if (item.first_name.includes(search)) {
                      return item
                    } else if (item.title === "") {
                      return list
                    }
                    return false;
                  })
                  .filter((item) => {
                    if (item.last_name.includes(search)) {
                      return item
                    } else if (item.title === "") {
                      return list
                    }
                    return false;
                  })
                  .filter((item) => {
                    if (item.email.includes(search)) {
                      return item
                    } else if (item.title === "") {
                      return list
                    }
                    return false;
                  })
                  .map((item) => (
                    <tr>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                      <td className="icon">
                        <FaPen
                          onClick={() => history.push("edituser")}
                          style={{ marginRight: "2rem" }}
                        />
                        <FaTrashAlt onClick={() => setClick(true)} />
                        {click && <DeletForm />}
                      </td>
                    </tr>
                  ))
              : null}
          </table>
        </div>
      </section>
    </div>
  )
}

export default ListUser;
