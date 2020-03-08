<template>
  <a-layout-content
    :style="{ background: '#fff', marginTop: '20px', padding: '10px', minHeight: '60px' }"
  >
    <a-row>
      <a-col :span="6">
        <dl class="block">
          <dt>参与任务</dt>
          <dd>10个</dd>
        </dl>
      </a-col>
      <a-col :span="6">
        <dl class="block">
          <dt>账户地址</dt>
          <dd>{{address}}</dd>
        </dl>
      </a-col>
      <a-col :span="6">
        <dl class="block">
          <dt>积分数量</dt>
          <dd>15000个</dd>
        </dl>
      </a-col>
      <a-col :span="6">
        <dl class="block">
          <dt>账户余额</dt>
          <dd>{{balance}}</dd>
        </dl>
      </a-col>
    </a-row>
  </a-layout-content>
</template>
<style scoped>
.block {
  text-align: center;
}
</style>
<script>
import wallet from "@/common/wallet";
export default {
  data() {
    return {
      address: wallet.address,
      balance: wallet.balance
    };
  },
  mounted() {
    wallet.init().then(result => {
      console.log("my.wallet", wallet);
      if (result) {
        this.address = wallet.address;
        this.balance = wallet.balance;
      }
    });
    // console.log("wallet", wallet);
    // this.address = wallet.address;
    // this.balance = wallet.balance;
    // this.address =
  }
};
</script>