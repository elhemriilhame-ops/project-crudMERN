import { useState } from "react"
import axios from 'axios'

function App(){

const[formData , setformData] = useState({
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
    try {
      const res = await axios.post("http://localhost:5000/user",formData)      
      console.log('Server response:', res.data);
      alert('Data posted successfully!');
      // Reset form
      setFormData({ firstName: '',lastName:'',email:'', password:'',birthdate:'' });
    } catch (error) {
      console.error(error)
    }
  }
    return(
     <>

    <form onSubmit={handleSubmit} >
    
      <label>First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

     <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

     <label>Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

     <label >password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    
    <label> birthdate :</label>
      <input
        type=""
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
      />
    

    <button type="submit">create account</button>
  </form>
</>
 )

}
export default App