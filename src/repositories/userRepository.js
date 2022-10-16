import connection from '../database/database.js';

async function getUserbyEmail(email) {
	return await connection.query('SELECT * FROM users WHERE email=$1', [email]);
}

async function createUser(name, email, password) {
	return await connection.query(`
		INSERT INTO users 
			(name, email, password) 
			VALUES ($1, $2, $3);`, 
			[name, email, password])
}

async function createSession(userId, token) {
	return await connection.query(`
		INSERT INTO sessions 
			("userId", token) 
			VALUES ($1, $2);`, 
			[userId, token])
}

const userRepository = {
	getUserbyEmail, createUser, createSession
}

export default userRepository