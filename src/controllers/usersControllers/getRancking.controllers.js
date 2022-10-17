import userRepository from '../../repositories/users.repository.js'

async function getRanking (req, res) {
   
    try {
        const getUsers = await userRepository.getRanking();
        if(getUsers.rowCount !== 0){
            return res.status(200).send(getUsers.rows);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

export default getRanking;