<template>
  <div v-if="todolist != null" class="center">
    <table style="width: 65%" align="center">
      <tr>
        <td style="width: 75%">
          <h2 style="color: black">
            {{ todolist.name }}
          </h2>
        </td>
        <td style="width: 25%">
          <fa icon="trash-alt" class="icon-delete" type="fas" @click="del" />
        </td>
      </tr>
      <tr>
        <td style="width: 75%">
          <input
            type="text"
            v-model="addTodo"
            class="inputtodo"
            placeholder="ADD TODOLIST"
          />
        </td>
        <td>
          <fa icon="plus" class="icon-add" @click="add"></fa>
        </td>
      </tr>
      <tr>
        <td>
          <div v-if="getErrorMessageTodo !== ''" class="messageerror">
            {{ getErrorMessageTodo }}
          </div>
          <div class="todos-container">
            <todo v-for="todo in todolist.todos" :key="todo.id" :todo="todo" />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import Todo from "./Todo";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  props: {
    todolist: { type: Object },
  },
  data() {
    return {
      addTodo: "",
      currentName: "",
    };
  },
  methods: {
    ...mapActions("todolist", ["createTodo", "deleteTodoList"]),
    add() {
      this.createTodo({
        name: this.addTodo,
        completed: false,
        todolist_id: this.todolist.id,
      }).then(this.cancel);
    },
    del() {
      this.deleteTodoList({
        id: this.todolist.id,
      });
    },
    cancel() {
      this.addTodo = "";
    },
   
  },
  computed: {
    ...mapGetters("todolist", ["getErrorMessageTodo"]),
  },
};
</script>

<style scoped>
@import "./app.css";
</style>
