import React, { useState } from "react";
import Data from "../Employee"
// "proxy": "http://localhost:5000/"
function CrudApp() {
  // State for managing form inputs
  const [formData, setFormData] = useState({ id: "", name: "", email: "" });
  // State for managing list of items
  const [items, setItems] = useState([]);
  // State for tracking whether form is in edit mode
  const [isEdit, setIsEdit] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      if (isEdit) {
        // If in edit mode, update item
        const updatedItems = items.map((item) =>
          item.id === formData.id ? formData : item
        );
        setItems(updatedItems);
        setIsEdit(false);
      } else {
        // If not in edit mode, add new item
        setItems([...items, { ...formData, id: Date.now() }]);
        // console.log("submit", updatedItems)
      }
      // Clear form inputs after submission
      setFormData({ id: "", name: "", email: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  // Function to handle edit button click
  const handleEdit = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setFormData(selectedItem);
    setIsEdit(true);
  };

  // Function to handle delete button click
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Function to clear form inputs
  const clearForm = () => {
    setFormData({ id: "", name: "", email: "" });
    setIsEdit(false);
  };

 
  return (
    <div>
      <h1>CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-group "
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button type="submit" className="bg-success ">
          {isEdit ? "Update" : "Add"}
        </button>
        <button type="button" className="bg-warning" onClick={clearForm}>
          Clear
        </button>
      </form>
      <table className="table mt-4">
        <thead>
          <tr>
            <th className="bg-success-subtle">SNo</th>
            <th className="bg-success-subtle">Name</th>
            <th className="bg-success-subtle">Email</th>
            <th className="bg-success-subtle">Action</th>
          </tr>
        </thead>
        <tbody className="container">
          {items.map((item) => (
            <tr key={item.id}>
                <td>{item.id + 1}</td>
              <td>{item.name}</td>
              <td> {item.email}</td>

              <td className="d-flex justify-content-around">
                {" "}
                <button className="bg-info" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="bg-danger"  onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
  )
}

export default CrudApp;
