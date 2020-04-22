const connection = require('../../connection.js')

module.exports = {
    getAllProjects : (req, res) =>{
        console.log('ici');

        connection.query('SELECT * FROM projects', function(error,result){
            if (error) throw error
            res.status(200).send(result)
        })
    },
    getProject: (req, res) =>{
        const {id} = req.params
        connection.query(
            'SELECT * FROM projects WHERE id ='+id+'',
            function(error,result){
                if (error){
                    res.status(405).send('There is no such project here !')
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
    deleteProject:(req, res) =>{
        const {id}=req.params
        connection.query('DELETE FROM projects WHERE id='+id+'', function(error,result){
            if(error){
                res.status(404).send('Project not found')
            }else{
                res.status(200).send('Project deleted')}
        })
    },
    createProject:(req,res) =>{
        const data = req.body
        connection.query('INSERT INTO projects SET?',data,
            function(error,result){
                if(error)throw error
                res.status(200).send(result)
            }
        )
    }
}

