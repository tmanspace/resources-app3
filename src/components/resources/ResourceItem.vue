<template>
  <li>
    <base-card>
      <header>
        <h3>{{item.title}}</h3>
        <base-button mode="flat">Delete</base-button>
      </header>
      <p>{{item.description}}</p>
      <nav>
        <a :href="item.link">View resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
  name: "ResourceItem",
  components: {BaseButton},

  props: ['item']
}
</script>

<style scoped>
li {
  list-style: none;
  max-width: 40rem;
  margin: auto auto 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover, a:active {
  color: #c89300;
}
</style>