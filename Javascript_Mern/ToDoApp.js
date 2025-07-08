let todo = [];
alert("Welcome to the App");
let req = prompt("What do you want to do: ");

while (true) {
  //to keep the app running

  if (req === "quit") {
    console.log("Quitting the app...");
    break;
  }
    if (req == "list") {
    console.log("--------------------------");
    for (let i = 0; i<todo.length; i++) {
      console.log(i,todo[i]);
    }
    console.log("--------------------------");
  }
   else if (req == "add") {
    let task = prompt("Please enter the task you want to add: ");
    todo.push(task);
    alert("Task added!");
  }
   else if(req=="delete"){
    //we will delete with the help of index no
      let index = prompt("Please enter the number of the task you want to delete: ")
      todo.splice(index,1)
      console.log("Task Deleted")
   }
   else {
    alert("Unknown command. Please enter add, list, delete, or quit.");
  }

  req = prompt("What do you want to do: ");
}
