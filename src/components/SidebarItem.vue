<template>
  <div>
    <ul>
      <li>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: { type: Object },
  },
};
</script>

<style scoped>
div {
  display: block;
  align-items: center;
}
ul li {
  display: block;
  height: auto;
  width: auto;
  line-height: 20px;
  font-size: 15px;
  color: white;
  transition: .5s;}

  ul li:hover {
  padding-left: 10px;
  color: rgba(255,255,255,.1);

}
</style>
