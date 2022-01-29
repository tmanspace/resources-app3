<template>
  <section>
    <h3>My friends</h3>
    <ul>
      <friend-contact v-for="friend in friends" :key="friend.id">
        {{friend.name}}
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "@/components/FriendContact";

export default {
  name: "App.vue",
  components: {
    'friend-contact': FriendContact
  },
  data() {
    return {
      friends: [
        {
          id: '1',
          name: 'Manuel Lorenz',
          phone: '+1 987 323 12 31',
          email: 'manuel@loc.host'
        },
        {
          id: '2',
          name: 'Julie Lorenz',
          phone: '+1 932 323 12 31',
          email: 'julie@loc.host'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>