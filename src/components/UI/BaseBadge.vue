<template>
<div class="badge">
  <a :href="badge.link">
    {{badge.title}}
  </a>
</div>
</template>

<script>
export default {
  name: "BaseBadge",
  props: ['badge']
}
</script>

<style scoped>

</style>