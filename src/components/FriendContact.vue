<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-show="detailsVisible">
      <li>Phone: {{friend.phone}}</li>
      <li>Email: {{friend.email}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FriendContact.vue",
  props: ['friend'],
  data() {
    return {
      detailsVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    }
  }
}
</script>

<style >

</style>