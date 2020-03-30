module.exports = {
	port:5000,
	routes:  [
		{
			path:"accounts",
			port:"5001"
		},
		{
			path:"members", 
			port:"5002"
		}, 
		{
			path:"tasks", 
			port:"5003"
		}, 
		{
			path:"projects", 
			port:"5004"
		},


	]

}