<template>
  <section id="contacts">
    <h1>My friends</h1>
    <new-friend @add-friend="addFriend"></new-friend>
    <ul>
      <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :friend="friend"
          @toggle-favourite="toggleFavProp">
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "@/components/FriendContact";
import NewFriend from "@/components/NewFriend";

export default {
  name: "App.vue",
  components: {
    'friend-contact': FriendContact,
    'new-friend': NewFriend
  },
  data() {
    return {
      friends: [
        {
          id: '1',
          name: 'Manuel Lorenz',
          phone: '+1 987 323 12 31',
          email: 'manuel@loc.host',
          isFavourite: true
        },
        {
          id: '2',
          name: 'Julie Lorenz',
          phone: '+1 932 323 12 31',
          email: 'julie@loc.host',
          isFavourite: false
        }
      ]
    }
  },
  methods: {
    toggleFavProp(id) {
      const friendFounded = this.friends.find(friend => friend.id === id)
      friendFounded.isFavourite = !friendFounded.isFavourite
    },
    addFriend(newFriend) {
      this.friends.push(newFriend)
    }
  }
}
</script>

<style >
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h1 {
  text-align: center;
  color: white;
  background: #5b0fff;
  width: 100%;
  padding: 1rem 4rem;
  margin: 0;
}

#contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  margin: 0 0.25rem;
  color: white;
  padding: 0.5rem 3rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>