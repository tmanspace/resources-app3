<template>
  <base-card>
    <h2>Manage goals</h2>
    <input type="text" name="goal" id="goal" v-model="goalValue">
    <button @click="setGoal">Set goal</button>
    <teleport>
      <error-alert v-if="isInvalid">
        <h2>Invalid data</h2>
        <p>Please try again</p>
        <button @click="removeError">Okay </button>
      </error-alert>
    </teleport>
  </base-card>
</template>

<script>
import errorAlert from "@/components/ErrorAlert";

export default {
  name: "ManageGoals",
  components: {
    'error-alert': errorAlert
  },
  data() {
    return {
      goalValue: '',
      isInvalid: false
    }
  },
  methods: {
    setGoal() {
      if (this.goalValue === '') {
        this.isInvalid = true;
      }
    },
    removeError() {
      this.isInvalid = false;
    }
  }
}
</script>

<style scoped>

</style>