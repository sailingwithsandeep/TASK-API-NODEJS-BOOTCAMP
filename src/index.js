const app = require("./app");
const port = process.env.PORT;

app.listen(port || 3000, () => {
	console.log("Server is up on port " + port);
});
