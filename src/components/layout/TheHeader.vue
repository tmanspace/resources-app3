<template>
<header>
  <h1>{{title}}</h1>
</header>
</template>

<script>
export default {
  name: "TheHeader",
  props: ['title']
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background: #5a48a3;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

h1 {
  margin: 0;
  color: white;
}
</style>