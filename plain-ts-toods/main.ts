(function main() {

  const newTodo = document.querySelector('#new-todo') as HTMLInputElement;
  const todoList = document.querySelector('#todo-list') as HTMLLIElement;
  const addTodoBtn = document.querySelector('#add-todo-btn') as HTMLButtonElement;

  let store: Array<Todo> = [];

  newTodo.addEventListener(
    'keydown',
    e => {
      if (13 === e.keyCode && todoWasParsed()) render();
    }
  );

  addTodoBtn.addEventListener(
    'click',
    () => {
      if (todoWasParsed()) render();
    }
  );

  function todoWasParsed() {
    const label = newTodo.value.trim();
    if (!label || !label.length) return false;
    const payload = TodoFactory.create(label);
    store = [ payload, ...store ];
    console.log(payload);
    newTodo.value = '';
    return true;
  }

  function render() {
    todoList.innerHTML = store.map(todo => `
      <li data-id="${todo.id}" class="${todo.complete ? 'complete' : ''}">
        ${todo.label}
        <input type="checkbox" ${todo.complete ? 'checked' : ''} />
      </li>
    `).join('');
  }

  render();

  interface Todo {
    id: number;
    complete: boolean;
    label: string;
  }

  class TodoFactory {
    public static create(label: string): Todo {
      return { label, complete: false, id: Date.now() };
    };
  }

})();
