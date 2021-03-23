<template>
  <div>
    <input 
      type="checkbox" 
      id="check" 
    />
    <label 
      for="check"
    >
      <i 
        class="fas fa-bars" 
        id="btn"
      ></i>
      <i 
        class="fas fa-times" 
        id="cancel"
      ></i>
    </label>

    <div class="sidebar">
      <input 
        v-model="name" 
        placeholder="ADD TODO" 
        style="width: 170px" 
      />
      <fa 
        icon="plus" 
        @click="send" 
        class="icon_plus_sidebar"
      ></fa>

      <sidebar-item
        v-for="todolist in allTodoList"
        :key="todolist.id"
        :item="todolist"
        @click="method(todolist)"
      />
    </div>
  </div>
</template>


<script>
import SidebarItem from "./SidebarItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  methods: {
    send: function () {
      if (this.name.length != 0) {
        console.log(this.name);
        this.createTodoList(this.name).then((result) => {
          console.log(result);
          console.log(this.$parent.$attrs);
        });
      }
    },
    ...mapActions("account", ["login", "logout", "getAccountData"]),
    ...mapActions("todolist", ["getTodolists", "createTodoList"]),
  },
  data() {
    return {
      list: null,
      name: "",
      todo: [],
      value: null,
    };
  },
  computed: {
    ...mapGetters("account", ["getToken", "getUserData", "isLogIn"]),
    ...mapGetters("todolist", ["getTodolistData"]),
  },
  props: {
    allTodoList: { type: Object },
    method: { type: Function },
  },
  mounted() {
    this.method();
  },
};
</script>

<style scoped>
header {
  font-size: 22px;
  color: white;
  text-align: center;
  background: #056f45;
  user-select: none;
}

#btn,#cancel {
  position: absolute;
  background: white;
  border-radius: 3px;
  cursor: pointer;
}
.sidebar {
  position: fixed;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #122671;
  transition: all 0.5s ease;
}

#btn {
  left: 140px;
  top: 10px;
  font-size: 25px;
  color: #010e14;
  padding: 6px 12px;
  transition: all 0.5s;
}
#cancel {
  z-index: 1111;
  left: -195px;
  top: 17px;
  font-size: 30px;
  color: #04200c;
  padding: 4px 9px;
  transition: all 0.5s ease;
}
#check:checked ~ label #btn {
  left: 250px;
  opacity: 0;
  pointer-events: none;
}

#check {
  display: none;
}
#check:checked ~ .sidebar {
  left: 0;
}
#check:checked ~ label #cancel {
  left: 195px;
}
</style>
