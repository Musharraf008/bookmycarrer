const axios = require('axios')

exports.homeRoute = (req, res) => {
    axios.get('https://bookmycarrer.onrender.com/api/users')
        .then(responsee =>{
            console.log(res.data)
            res.render('index', {users: responsee.data})
        }).catch(err => {res.send(err)})

}

exports.addUser = (req, res) => {
    res.render('add_user')
}

// exports.updateUser = (req, res) => {
//     res.render('update_user')
// }

exports.updateUser = (req, res) =>{
    axios.get('https://bookmycarrer.onrender.com/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
