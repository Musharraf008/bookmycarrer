let userdb = require('../model/model')


// Create and show user
exports.create = (req, res) =>{
    if(!req.body){
        res.status(400).send({message: 'content cannot be empty!'})
        return;
    }

    const user = new userdb({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
}
//Find user
exports.find = (req, res) =>{
    
    if(req.query.id){
        const id = req.query.id;

        userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }









}
// Update user
exports.update = (req, res) =>{

    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete user
exports.delete = (req, res) =>{
    const id = req.params.id;
    userdb.findByIdAndDelete(id).then(data =>{
        if(!data){
            res.send({message: "Can't delete with id: "+ id})
        }else{
            res.send({message: "User was deleted successfully!"})
        }
    }).catch(err =>{res.send({message: err.message || "You can't delete user with id: " +id})})
}


