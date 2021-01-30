const app = require("./app");
// const port = process.env.PORT;
const port = 43751;

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
