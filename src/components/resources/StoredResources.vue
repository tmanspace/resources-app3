<template>
  <ul>
    <resource-item
        v-for="res in resources"
        :key="res.id"
        :item="res">
    </resource-item>
  </ul>
</template>

<script>
import resourceItem from "@/components/resources/ResourceItem";

export default {
  components: {
    'resource-item': resourceItem
  },
  props: ['resources']
};
</script>

<style scoped>

ul {
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>