<template>
<dialog open>
  <header>
    <slot name="header">
      <h3>{{title}}</h3>
    </slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <menu>
    <slot name="actions"></slot>
  </menu>
</dialog>
</template>

<script>
export default {
  name: "BaseModal",
  props: ['title', 'description']
}
</script>

<style scoped>
dialog {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  border: none;
  outline: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 300px;
  /*min-height: 200px;*/
}

header {
  background: #5a48a3;
}

h3 {
  padding: 1rem 1.5rem;
  margin: 0;
  color: white;
}

main {
  padding: 1rem 1.5rem;
}


menu {
  padding: 0.5rem 1.5rem;
  margin: 0;
  display: flex;
  justify-content: end;
}

</style>