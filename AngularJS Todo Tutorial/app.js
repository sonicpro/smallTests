angular.module("controllerAsExample", [])
  .controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
    this.todos = [{
        text: "Learn AngularJS",
        done: false
    }, {
        text: "Build an app",
        done: false
    }],

    this.formTodoText = "";
}

TodoCtrl.prototype.addTodo = function () {
    this.todos.push({
        text: this.formTodoText,
        done: false
    });
    this.formTodoText = "";
};

TodoCtrl.prototype.getTotalTodos = function () {
    return this.todos.length;
}

TodoCtrl.prototype.clearCompleted = function () {
    this.todos = _.filter(this.todos, function (todo) {
        return !todo.done;
    });
}
