let todoList = document.getElementsByClassName(`todo-list`)[0];

let todoForm = document.forms[`todo`];

todoForm.onsubmit = function (ev){
    ev.preventDefault();

    let todo = todoForm.todo.value;

    let divTodo = todoHtml(todo)





    todoList.appendChild(divTodo);
}








function todoHtml(todo) {
    let divTodo = document.createElement(`div`);

    divTodo.innerHTML = `
<div class="todo" id="todo${todo.id}">
<label for="check-lable">
      <input type="checkbox" id="check-lable" ${todo.completed && `checked`}>
      ${todo.title}
    </label>
    <button>delete</button>

</div>`
}