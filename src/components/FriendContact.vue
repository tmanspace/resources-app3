<template>
  <li>
    <h4>{{friend.name}}</h4>
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
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: '1',
        name: 'Manuel',
        phone: '1',
        email: 'manuel@as.cs'
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    }
  }
}
</script>

<style scoped>

</style>