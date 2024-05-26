ENDPOINTS

1. Challenges
	*get* challenges by language id: http://localhost:4000/api/challenges/:language_id 
	*get* all challenges: http://localhost:4000/api/challenges
	*post* create challenge: http://localhost:4000/api/challenges
	*put* update challenge: http://localhost:4000/api/challenges/:challenge_id
	*delete* delete challenge: http://localhost:4000/api/challenges/:challenge_id
	
2. Forum
	*get* all comments: http://localhost:4000/api/forum
	*post* create new comment: http://localhost:4000/api/forum
	
3. Modules
	*get* all modules: http://localhost:4000/api/modules
	*post* create new module: http://localhost:4000/api/modules/:language_id
	*get* modules by language: http://localhost:4000/api/modules/:language_id
	*get* modules by id: http://localhost:4000/api/modules/id/:id
	*put* updtate module: http://localhost:4000/api/modules/:id
	*delete* delete module: http://localhost:4000/api/modules/:id

4. Users
	*get* all users: http://localhost:4000/api/users
	*get* user by id: http://localhost:4000/api/users/:id
	*post* new user: http://localhost:4000/api/auth/register
	*put* update user: http://localhost:4000/api/users/:id
	*delete* delete user: http://localhost:4000/api/users/:id	
	