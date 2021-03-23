<template>
  <div v-bind:class="{ completed }" id="todo_div">
    <input 
      v-model="completed" 
      type="checkbox" 
    />

    <span
      v-if="!isChanging" 
      @click="isChanging = true" 
      style="color: black"
    >{{
      todo.name
      }}
    </span>

    <div v-else id="todo_div">
      <input 
        v-model="currentName" 
      />
      <fa
        icon="times-circle"
        type="fas"
        @click="cancel"
        class="icon-cancel-todo"
      ></fa>
      <fa 
        icon="edit" 
        type="fas" 
        @click="modify" 
        class="icon-edit"
      ></fa>
    </div>
    <fa 
     icon="trash-alt"
     type="fas" 
     @click="del" 
     class="icon-delete-todo"
    ></fa>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  props: {
    todo: { type: Object },
  },
  methods: {
    modify() {
      this.modifyTodo({
        id: this.todo.id,
        completed: Number(this.completed),
        name: this.currentName,
        todolist_id: this.todo.todolist_id,
      }).then((this.isChanging = false));
    },
    cancel() {
      this.isChanging = false;
      this.currentName = this.todo.name;
    },
    del() {
      this.deleteTodo({
        id: this.todo.id,
        todolist_id: this.todo.todolist_id,
      });
    },

    ...mapActions("todolist", ["modifyTodo", "deleteTodo"]),
  },
  data() {
    return {
      name: this.todo.name,
      completed: Boolean(this.todo.completed),
      isChanging: false,
      currentName: this.todo.name,
    };
  },
};
</script>

<style scoped>
@import "./app.css";

</style>
