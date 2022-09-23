import axios from "axios"
import React from "react"
import API_URL from "../../Api"
import "./deletForm.css"

function DeletForm() {
  const deleteData = async () => {
    try {
      await axios.DELETE(`${API_URL}/users/1`)
    } catch (e) {}
  }
  return (
    <div className="model">
      <span className="close" title="Close Modal">
        &times;
      </span>
      <form className="modal-content" action="">
        <div className="container">
          <h1>Delete Account</h1>
          <p>Are you sure you want to delete your account?</p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button
              onClick={() => deleteData()}
              type="button"
              className="deletebtn"
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DeletForm;
