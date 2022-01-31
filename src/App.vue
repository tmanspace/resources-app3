<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import theHeader from "@/components/TheHeader";
import userInfo from "@/components/UserInfo";
import badgeList from "@/components/BadgeList";

export default {
  components: {
    'the-header': theHeader,
    'user-info': userInfo,
    'badge-list': badgeList
  },
  data() {
    return {
      activeUser: {
        name: 'Tim Serazutdinov',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>