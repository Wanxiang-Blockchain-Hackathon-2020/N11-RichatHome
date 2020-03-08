<template>
  <a-layout-header>
    <div class="logo">RICHATHOME | 宅富家</div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['1']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <router-link to="/">首页 Home</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/newtask">创建任务 +Tasks</router-link>
      </a-menu-item>
      <a-menu-item key="3">申请奖励 +Credits</a-menu-item>
      <a-menu-item key="4">兑换奖励 Exchange</a-menu-item>
      <a-menu-item key="5">登录 Login</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<style>
#home .logo {
  width: 150px;
  height: 31px;
  line-height: 31px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding-left: 6px;
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
<script>
export default {
  methods: {
    showNewTask: function(item) {
      console.log("test", this.$router);
      this.$router.push({ name: "NewTask" });
    }
  }
};
</script>
