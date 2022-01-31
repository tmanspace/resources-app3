<template>
<button :class="mode" >
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ['mode']
}
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  background: #5a48a3;
  margin-right: 1rem;
  color: white;
  border: none;
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;
  min-width: 120px;
}

button:focus {
  outline: none;
}

button:hover, button:active {
  background: #44357d;
}

.flat {
  background: transparent;
  color: #5a48a3;
}

.flat:hover, .flat:active {
  background: #5a48a3;
  color: white;
}
</style>