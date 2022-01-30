<template>
  <li>
    <h2>{{friend.name}} {{this.friend.isFavourite ? 'Fav' : ''}}</h2>
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
  props: {
    friend: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      detailsVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.friend.id);
    }
  }
}
</script>

<style >

</style>