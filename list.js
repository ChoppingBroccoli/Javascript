// Simple Todo app
// able to add new items to the Todo list, list those items, and delete the items

// setTimeout() makes JS wait .5 seconds before loading allowing HTML time to load so the user can see the directions
window.setTimeout(function() {
	// initialize "todos" array with one item
	var todos = ["Buy new turtle"];
	// ask the user what they want to do with the Todo list
	var input = prompt("What would you like to do?");

	// while "quit" is not entered by the user
	while(input != "quit") {
		// print all the items in the array
		if(input === "list") {
			listTodo();

		// add a new item to the end of the array	
		} else if(input === "new") {
			addTodo();

		// delete a Todo item
		} else if(input === "delete"){
			deleteTodo();
		}

		// ask again for new input
		var input = prompt("What would you like to do?");	
	}
	// printed if the user enters "quit" at the prompt
	console.log("You quit the app");

// invoked when user enters "list" in the prompt
function listTodo(){
	console.log("************");
	// iterate through the todos array and print each item on its own line
	// eachTodo holds the value of each index in the array
	// i is the index (i.e. 0, 1, 2, etc.) of the item in the array
	todos.forEach(function(eachTodo, i) {
		console.log(i + ": " + eachTodo);	
	});
	console.log("************");
}

// invoked when user enters "new" in the prompt
function addTodo(){
	// ask for new todo
	var newTodo = prompt("What is the new item?");
	// add an item to the end of the todos array
	todos.push(newTodo);
	console.log("");
	console.log("Added " + newTodo + " to the list");
	listTodo();
}

// invoked when user enters "delete" in the prompt
function deleteTodo(){
	// ask for index number of the todo to be deleted
	var index = prompt("Enter index of todo to delete");
	// delete that todo
	var deletedTodo = todos.splice(index,1);
	console.log("");
	console.log("Deleted " + index + ": " + deletedTodo);
	
	// list Todos after delete
	listTodo();
}

}, 500);