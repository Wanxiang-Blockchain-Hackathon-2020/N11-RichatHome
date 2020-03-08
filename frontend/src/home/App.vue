<template>
  <a-layout id="home" class="layout" style="padding: 20px 50px 0 50px">
    <AppHeader />
    <MySummary />

    <a-layout-content
      :style="{ background: '#fff', marginTop: '20px', padding: '10px', minHeight: '280px' }"
    >
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<style>
#home .logo {
  width: 150px;
  height: 31px;
  line-height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
<script>
import wallet from "@/common/wallet";

import AppHeader from "@/home/components/AppHeader";
import Dashboard from "@/home/components/Dashboard";
import MySummary from "@/mytoken/components/Summary";

export default {
  components: {
    AppHeader,
    MySummary,
    Dashboard
  },
  methods: {
    createNewTask: function(item) {
      console.log("test", this.$router);
      this.$router.push({ name: "NewTask" });
    }
  },

  mounted() {
    // wallet.init().then(result => {
    //   console.log("my.wallet", wallet);
    // });
  }
};
</script>
