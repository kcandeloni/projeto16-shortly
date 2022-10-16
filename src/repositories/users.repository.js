import connection from '../database/database.js';

async function getUserbyEmail(email) {
	return await connection.query(`SELECT * FROM users WHERE email=$1`, 
		[email]);
}

async function createUser(name, email, password) {
	return await connection.query(`
		INSERT INTO users 
			(name, email, password) 
			VALUES ($1, $2, $3);`, 
			[name, email, password])
}

async function getUserbyId(userId) {
	return await connection.query(`SElECT * FROM users WHERE id = $1;`, 
		[userId]
	);
}

const userRepository = {
	getUserbyEmail, createUser, getUserbyId
}

export default userRepository