<template>
  <base-modal title="Invalid data" v-if="isInvalid">
    <template #default>
      <p>One of the inputs is empty. Please add data</p>
    </template>
    <template #actions>
      <base-button @click="isInvalid = !isInvalid">Okay</base-button>
    </template>
  </base-modal>
  <base-card>
    <h2>Add resource</h2>
    <form @submit.prevent="fetchResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="newResource.title">
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" v-model="newResource.link">
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <textarea rows="3" name="desc" id="desc" v-model="newResource.description"> </textarea>
      </div>
      <base-button type="submit">Add</base-button>
    </form>

  </base-card>
</template>

<script>
export default {
  name: "AddResource",
  components: {},
  data() {
    return {
      isInvalid: false,
      newResource: {
        id: new Date().toISOString(),
        title: '',
        link: '',
        description: ''
      }
    }
  },
  inject: [
    'addResource'
  ],
  methods: {
    fetchResource() {
      if (this.newResource.title.trim() === '' || this.newResource.link.trim() === '' || this.newResource.description.trim() === '') {
        this.isInvalid = true;
        return;
      }
      this.addResource(this.newResource)
      this.newResource = {
        id: new Date().toISOString(),
        title: '',
        link: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>

dialog p {
  margin: 0;
  color: #666;
}

h2 {
  margin: 0 0 1rem;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
  color: #5a48a3;
}

input, textarea {
  border: 1px solid #ddd;
}

input {
  height: 2rem;
}

input:focus, textarea:focus {
  border: 1px solid #5a48a3;
  outline: none;
  background-color: #f3f0fd;
}
</style>