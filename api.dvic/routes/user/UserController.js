const connection = require('../../connection.js')

module.exports = {
    getAllUsers : (req, res) =>{
        console.log('ici');

        connection.query('SELECT * FROM users', function(error,result){
            if (error) throw error
            res.status(200).send(result)
        })
    },
    getUser: (req, res) =>{
        const {id} = req.params
        connection.query(
            'SELECT * FROM users WHERE id ='+id+'',
            function(error,result){
                if (error){
                    res.status(405).send('There is no such user here !')
                }
                else if(result.length <1){
                    res.status(204).send('No content')
                }
                else{
                    res.status(200).send(result)
                }
            }
        )
    },
    deleteUser:(req, res) =>{
        const {id}=req.params
        connection.query('DELETE FROM users WHERE id='+id+'', function(error,result){
            if(error){
                res.status(404).send('User not found')
            }else{
                res.status(200).send('User deleted')}
        })
    },
    createUser:(req,res) =>{
        const data = req.body
        connection.query('INSERT INTO users SET?',data,
            function(error,result){
                if(error)throw error
                res.status(200).send(result)
            }
        )
    }
}

