<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{slotProps.item}}</h2>
      <p>{{slotProps.pTag}}</p>
    </course-goals>
  </div>
</template>

<script>
import theHeader from "@/components/TheHeader";
import userInfo from "@/components/UserInfo";
import badgeList from "@/components/BadgeList";
import courseGoals from "@/components/CourseGoals";

export default {
  components: {
    'the-header': theHeader,
    'user-info': userInfo,
    'badge-list': badgeList,
    'course-goals': courseGoals
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