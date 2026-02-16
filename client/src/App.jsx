import { useState } from "react"
import axios from 'axios'
import "./App.css";


function App(){

const[formData ,setFormData] = useState({
  firstName :'' ,
  lastName :'',
  email :'',
  password :'',
  birthdate: ''

})
 const handleChange = (e) =>{
    setFormData({ ...formData , [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
   //Empty fields validation
    if (!formData.firstName ||!formData.lastName ||!formData.email ||!formData.password ||!formData.birthdate
) {
  alert("All fields are required!");
  return; 
}
      // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Invalid email format!");
    return;
  }

  // Password validation
  if (formData.password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

    // connect register form to backend API
    try {
      const res = await axios.post("http://localhost:5000/user",formData)      
      console.log('Server response:', res.data);
      alert('Data posted successfully!');

      
    //  Handle API response
     console.log(response.data);
     alert(response.data.message);

      // Reset form
      setFormData({ firstName: '',lastName:'',email:'', password:'',birthdate:'' });

    } catch (error) {
      console.error(error)
    }
  }
  return (
  <div className="container">
    <form className="form" onSubmit={handleSubmit}>

      <h2>REGISTER</h2>

      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Birthdate</label>
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Create Account</button>

    </form>
  </div>
);
}
export default App