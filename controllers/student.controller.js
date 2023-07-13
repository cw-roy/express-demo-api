const studentController = {
    findAll:  function (req, res) {
        res.send("You have reached the controller method to return all Students")
    }
}

module.exports = studentController;