<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  name: "ErrorAlert"
}
</script>

<style scoped>
dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  margin: 0;
  padding: 1rem;
  outline: none;
  border: none;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
}
</style>