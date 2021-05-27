import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/Signup");
  },
  
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/Signup", userData);
  },

  login: function(userData){
return axios.post("/login", userData);
  }
};