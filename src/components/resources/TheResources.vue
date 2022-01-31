<template>
  <base-card>
    <base-button @click="setTab('stored-resources')" :mode="selectedTab !== 'stored-resources' ? 'flat' : ''">Stored resources</base-button>
    <base-button @click="setTab('add-resource')" :mode="selectedTab !== 'add-resource' ? 'flat' : ''">Add resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab" ></component>
  </keep-alive>
</template>

<script>
import storedResources from "@/components/resources/StoredResources";
import addResource from "@/components/resources/AddResource";

export default {
  name: "TheResources",
  components: {
    'stored-resources': storedResources,
    'add-resource': addResource
  },
  data() {
   return {
     selectedTab: 'stored-resources',
     storedResourcesData: [
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
  },
  provide() {
    return {
      resources: this.storedResourcesData,
      addResource: this.addResource,
      removeResource: this.removeResource
    }
  },
  methods: {
    setTab(tabName) {
      this.selectedTab = tabName
    },
    addResource(res) {
      this.storedResourcesData.unshift(res);
      this.selectedTab = 'stored-resources'
    },
    removeResource(resId) {
      const index = this.storedResourcesData.findIndex(res => res.id === resId)
      this.storedResourcesData.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>