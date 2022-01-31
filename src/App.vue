<template>
  <the-header title="LeSources"></the-header>
  <the-resources></the-resources>
</template>

<script>
import theHeader from "@/components/layout/TheHeader";
import theResources from "@/components/resources/TheResources";

export default {
  components: {
    'the-resources': theResources,
    'the-header': theHeader
  },
  data() {
    return {
      // storedResources: [
      //   {
      //     id: '213124',
      //     title: 'Official guide',
      //     description: 'The official Vue.js documentation.',
      //     link: 'https://vuejs.org'
      //   },
      //   {
      //     id: '4234134',
      //     title: 'Google',
      //     description: 'The Search engine to find all you need.',
      //     link: 'https://google.com'
      //   }
      // ]
    }
  },
  // provide() {
    // return {
    //   resources: this.storedResources
    // }
  // }
};
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

body {
  margin: 0;
}

</style>