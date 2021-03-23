<template>
  <div id="root">
    <sidebar :allTodoList="getTodolistData" :method="setList" />
    <main>
      <todo-list :todolist="list" />
    </main>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Sidebar from "@/components/Sidebar";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    TodoList,
    Sidebar,
  },
  data() {
    return {
      list: null,
    };
  },
  methods: {
    affiche: function () {
      console.log(this.list);
    },
    setList: function (todolist) {
      this.list = todolist;
    },
    ...mapActions("todolist", ["getTodolists"]),
  },
  computed: {
    ...mapGetters("todolist", ["getTodolistData"]),
  },
  mounted() {
    this.getTodolists();
  },
};
</script>

<style scoped>
/* CHANGEEEEEEEEEEEEEEE ICI*****************/
#root {
  display: grid;
  grid-template-columns: 25% 75%;
  min-height: calc(100vh - 55px);
}

@import "../components/app.css";
</style>
