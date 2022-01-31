<template>
  <ul>

  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: '213124',
          title: 'Official guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: '4234134',
          title: 'Google',
          description: 'The Search engine to find all you need.',
          link: 'https://google.com'
        }
      ]
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>