const studentController = {

    findAll: function (req, res) {
        res.send("You have reached the controller method to return all Students")
    },
    
    findById: function (req, res) {
        res.send("You asked for student " + req.params.id)
    }
  
  }
  
  module.exports = studentController;

// const studentController = {
//     findAll:  function (req, res) {
//         res.send("You have reached the controller method to return all Students")
//     }
// },

//     findById: function (req, res) {
//         res.send("You asked for student " + req.params.id)

// }   


// module.exports = studentController;