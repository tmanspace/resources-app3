<template>
  <li>
    <header>
      <h3>{{item.title}}</h3>
      <button>Delete</button>
    </header>
    <p>{{item.description}}</p>
    <nav><a :href="item.link">View resource</a></nav>
  </li>
</template>

<script>
export default {
  name: "ResourceItem",
  props: ['item']
}
</script>

<style scoped>

</style>