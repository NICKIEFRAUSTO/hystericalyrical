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
  
  saveBlanks: function(blankData){
    return axios.post("/Blanksform", blankData)
  }
};