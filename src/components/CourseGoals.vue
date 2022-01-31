<template>
<section>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" pTag="..."></slot>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: "CourseGoals",
  data() {
    return {
      goals: ['Finish the course', 'Set up a few projects on Vue 3']
    }
  }
}
</script>

<style scoped>

</style>