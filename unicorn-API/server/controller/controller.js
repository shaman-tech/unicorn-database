var unicornDB = require('../model/model')


//Find Unicorn Location
exports.find = (req,res)=>{
    unicornDB.find()
    .then(user=>{
        res.json(user)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || 'Error occured trying to fetch user'})
    })

}

//Update Unicorn Location
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }
    const id = req.params.id
    unicornDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot update unicorn with ID ${id}, Unicorn no found!`})
            }
            else{
                console.log(data)
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error updating Unicorn"})
        })

}


