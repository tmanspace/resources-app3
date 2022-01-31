<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import storedResources from "@/components/resources/StoredResources";

export default {
  components: {
    'stored-resources': storedResources
  },
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

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>