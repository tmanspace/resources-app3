<template>
  <li>
    <h2>{{friend.name}} {{this.friend.isFavourite ? 'Fav' : ''}}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-show="detailsVisible">
      <li>Phone: {{friend.phone}}</li>
      <li>Email: {{friend.email}}</li>
    </ul>
    <button class="deleteButton" @click="$emit('delete', friend.id)">Delete friend</button>
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
  emits: ['toggle-favourite', 'delete'],
  // emits: {
  //   'toggle-favourite': function(id) {
  //     if (id) return true;
  //     else {
  //       console.warn('Id is missing');
  //       return false;
  //     }
  //   }
  // },
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

#app .deleteButton {
  margin-top: 20px;
  background: darkorchid;
  border: none;
}

#app .deleteButton:hover {
  background: blueviolet;
}

</style>