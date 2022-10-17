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

async function getRanking() {
	return await connection.query(`
		SELECT users.id AS id, users.name AS name,
			COUNT(urls."userId") AS "linksCount",
			COALESCE(SUM(urls."visitCount"),0) AS "visitCount"
			FROM users 
			LEFT JOIN urls ON users.id=urls."userId"
			GROUP BY users.id
			ORDER BY "visitCount" DESC, "linksCount" DESC LIMIT 10;
	`);
}

const userRepository = {
	getUserbyEmail, createUser, getUserbyId,
	getRanking
}

export default userRepository