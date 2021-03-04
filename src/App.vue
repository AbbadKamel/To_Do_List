<template>
 
 <div >
 <h3>{{message}}</h3>
 <form name="todo-form" method="post" v-on:submit.prevent="addnewtodo">

 <label for="add-todo">add a new task</label><br>
 <input name="add-todo" placeholder="add a new todo here" type="text" v-model="newTodo" />
 <button  type="submit">add</button>
 </form>


 <div class="todo-lists" v-if="todos.length">
         <h3>My Todos</h3>
         <ul>

         <li v-for="(list,index) in todos" :key="list.id">
         <input type="checkbox" v-on:change="completetask(list)" v-bind:checked="list.completed"/>

     
   


          <span class="title" contenteditable="true" v-on:keydown.enter="updateTask($event, list)" v-on:blur="updateTask($event, list)" v-bind:class="{completed: list.completed}">{{list.name}}</span>
          

          <button v-on:click="removetodo(index)">Supprimer</button>
        
         </li>
         </ul>
</div>

 </div>
  
  
</template>

<script>


export default {
name: 'todolist',

data(){
  return{

  todos: [
{
id: 1,
name : 'tache 1',
completed : false
},
{
id: 2,
name : 'tache 2',
completed: true
}
]
,
newTodo: '',
filter: 'all',
nextTodo: 3,
message: 'my todo list',

  }
},



 computed: {
    filtre(){
      return this.orderBy(this.todos, ['completed', false])
    }
  },

 
 methods: {
removetodo(index){
  this.todos.splice(index,1)
},

     addnewtodo() {
   
        this.todos.push({
        id: this.nextTodo,
        name: this.newTodo,
        completed: false
      })
      this.newTodo = '',
      this.nextTodo++
    },

    updateTask(e, list){
      e.preventDefault();
      list.name = e.target.innerText;
      e.target.blur();
    },

     completetask(list){
      list.completed = !list.completed;
    },

   
    
            
        },
     



}
</script>

