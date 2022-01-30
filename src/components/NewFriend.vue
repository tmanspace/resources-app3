<template>
  <section id="new-friend">
    <h2>New Friend</h2>
    <div class="input-sec">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="newFriend.name">
      </div>
      <div>
        <label for="name">Phone</label>
        <input type="text" v-model="newFriend.phone">
      </div>
      <div>
        <label for="name">Email</label>
        <input type="text" v-model="newFriend.email">
      </div>

    </div>

    <div>
      <input type="checkbox" id="fav" v-model="newFriend.isFavourite">
      <label for="fav">Is favourite?</label>
    </div>
    <button @click="addNewFriend">Add friend</button>
  </section>
</template>

<script>
export default {
  name: "NewFriend.vue",
  data() {
    return {
      newFriend: {
        id: new Date().toISOString(),
        name: '',
        phone: '',
        email: '',
        isFavourite: false
      }
    }
  },
  methods: {
    addNewFriend() {
      this.$emit('add-friend', this.newFriend);
      this.newFriend = {
        id: Math.floor(Math.random() * (100 - 2) + 2),
        name: '',
        phone: '',
        email: '',
        isFavourite: false
      }
    }
  }
}
</script>

<style scoped>
#app h2 {
  text-align: center;
}

#new-friend {
  margin-top: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 40rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

input {
  margin-bottom: 1rem ;
}

.input-sec {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.input-sec div {
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  width: 180px;
  height: 32px;
  border: none;
  border-bottom: 2px solid #ec3169;
}
</style>