<template>
  <div>
    <the-header></the-header>
<!--    <badge-list></badge-list>-->
<!--    <user-info-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    ></user-info>-->
<!--    <course-goals #default="slotProps">-->
<!--      <h2>{{slotProps.item}}</h2>-->
<!--      <p>{{slotProps.pTag}}</p>-->
<!--    </course-goals>-->
    <base-card>
      <button @click="setComponent('active-goals')">Active goals</button>
      <button @click="setComponent('manage-goals')">Manage goals</button>
    </base-card>
    <component :is="componentTab"></component>

  </div>
</template>

<script>
import theHeader from "@/components/TheHeader";
// import userInfo from "@/components/UserInfo";
// import badgeList from "@/components/BadgeList";
// import courseGoals from "@/components/CourseGoals";
import manageGoals from "@/components/ManageGoals";
import activeGoals from "@/components/ActiveGoals";

export default {
  components: {
    'the-header': theHeader,
    // 'user-info': userInfo,
    // 'badge-list': badgeList,
    // 'course-goals': courseGoals,
    'manage-goals': manageGoals,
    'active-goals': activeGoals
  },
  data() {
    return {
      componentTab: 'active-goals',
      activeUser: {
        name: 'Tim Serazutdinov',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setComponent(cmp) {
      this.componentTab = cmp;
    }
  }
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