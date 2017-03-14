angular.module("todoApp", [])
    .controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
    this.editMode = false;

    this.todos = [
        "Angular 1",
        "Angular 1.5",
        "Angular 2"
    ];

    this.addNewTodo = function() {
        if(this.newTodo) {
            this.todos.push(this.newTodo);
        }
        this.newTodo="";
    }

    this.editMore = function() {
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index) {
        this.todos.splice(index,1);
    }
}