<template>
  <a-col :span="17" :offset="3">
    <a-steps>
      <a-step status="process" title="创建合约">
        <a-icon type="loading" slot="icon" v-show="step=='contract'" />
        <a-icon type="solution" slot="icon" v-show="step!='contract'" />
      </a-step>
      <a-step status="finish" title="提交">
        <a-icon type="loading" slot="icon" v-show="step=='submit'" />
        <a-icon type="solution" slot="icon" v-show="step!='submit'" />
      </a-step>
      <a-step status="wait" title="完成">
        <a-icon type="smile-o" slot="icon" />
      </a-step>
    </a-steps>
  </a-col>
</template>
<script>
export default {
  props: {
    step: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    }
  }
};
