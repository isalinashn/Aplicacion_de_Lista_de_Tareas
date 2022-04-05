import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todolist = new TodoList();

todolist.todos.forEach( todo => crearTodoHtml( todo ));

// const tarea = new Todo('Aprender Javascript');
// const tarea2 = new Todo('Comprar un unicornio');
// todolist.nuevoTodo(tarea);
// todolist.nuevoTodo(tarea2);
// crearTodoHtml( tarea );
// console.log(todolist);
