import { useState } from "react";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone_number:"",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // or make a POST request to a server
  };

  return (
    <div>
      <div><h1 className="text-center col-sm-8">Sign Up</h1></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label for="Email" className="col-sm-2 col-form-label text-end">Email</label>
          <div className="col-sm-4">
            <input 
              type="email" 
              className="form-control" 
              id="Email" placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="phoneNum" className="col-sm-2 col-form-label text-end">Phone Number</label>
          <div className="col-sm-4">
            <input 
              type="text" 
              className="form-control" 
              id="phoneNum" 
              placeholder="phone number" 
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label  text-end">Password</label>
          <div className="col-sm-4">
            <input 
              type="text" 
              className="form-control" 
              id="inputPassword3" 
              placeholder="Password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
       
       
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary offset-sm-6">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;