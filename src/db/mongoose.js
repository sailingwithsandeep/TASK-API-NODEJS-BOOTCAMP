const mongoose = require("mongoose");
const url =
	"mongodb+srv://demoadmin:mernpractice@mernstackdemo.ew6v9.mongodb.net/todolist?retryWrites=true&w=majority";

mongoose.connect(url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

//

// const add_task = new Task({
//     description:'Go out',
//     completed:true
// })
// add_task.save().then(()=>{
//     console.log(add_task);
// }).catch((error)=>{
//     console.log('error!',error);
// })
