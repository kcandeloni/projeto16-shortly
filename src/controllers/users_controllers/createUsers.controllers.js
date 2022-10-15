import connection from '../../database/database.js';

async function createUsers (req, res) {
    const {
        name,
        email,
        password } = req.body;

    connection.query(`INSERT INTO users 
    (name, email, password) 
    VALUES ($1, $2, $3);`, 
    [name, email, password])
        .then( () => {
            res.sendStatus(201);
        });
}

export default createUsers;