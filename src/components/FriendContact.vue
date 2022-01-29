<template>
  <li>
    <h2>{{friend.name}} {{friendFav ? 'Fav' : ''}}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
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
      friendFav: this.friend.isFavourite
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavourite() {
      this.friendFav = !this.friendFav;
    }
  }
}
</script>

<style >

</style>