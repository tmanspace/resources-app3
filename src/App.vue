<template>
  <section id="contacts">
    <h1>My friends</h1>
    <ul>
      <friend-contact v-for="friend in friends" :key="friend.id" :friend="friend"></friend-contact>
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