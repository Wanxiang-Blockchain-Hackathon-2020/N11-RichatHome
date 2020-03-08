<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-row>
      <a-col :span="17" :offset="3">
        <!-- <a-steps :current="current">
          <a-step :key="step1" :title="'项目信息'" />
          <a-step :key="step2" :title="'验证 / 管理'" />
          <a-step :key="step3" :title="项目信息" />
        </a-steps>-->
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="project" :style="{width:'25%', textAlign:'center'}">
            <!-- <a-icon type="basic" /> -->
            <a-icon type="project" />项目信息
          </a-menu-item>
          <a-menu-item key="manage" :style="{width:'25%', textAlign:'center'}">
            <a-icon type="safety" />验证 / 管理
          </a-menu-item>
          <a-menu-item key="exchange" :style="{width:'25%', textAlign:'center'}">
            <a-icon type="dollar" />积分兑换
          </a-menu-item>
          <a-menu-item key="result" :style="{width:'25%', textAlign:'center'}">
            <a-icon type="deployment-unit" />创建结果
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
    <a-row :style="{ marginTop: '60px' }">
      <ProjectForm :show="current[0]==='project'" :onDateRangeChange="onDateRangeChange" />
      <VeriyForm :show="current[0]==='manage'" />
      <ExchangeForm
        :show="current[0]==='exchange'"
        :onExchangePeriodTypeChange="onExchangePeriodTypeChange"
      />
      <!-- <SubmitResult v-show="current[0]==='result'" step="status" /> -->
      <a-col :span="17" :offset="3" v-show="current[0]==='result'">
        <a-steps>
          <a-step status="process" title="创建合约">
            <a-icon type="loading" slot="icon" v-show="status=='contract'" />
            <a-icon type="solution" slot="icon" v-show="status!='contract'" />
          </a-step>
          <a-step status="finish" title="提交">
            <a-icon type="loading" slot="icon" v-show="status=='submit'" />
            <a-icon type="form" slot="icon" v-show="status!='submit'" />
          </a-step>
          <a-step status="wait" title="完成">
            <a-icon type="like" slot="icon" v-show="status=='done'" />
            <a-icon type="smile-o" slot="icon" v-show="status!='done'" />
          </a-step>
        </a-steps>
      </a-col>
    </a-row>
    <a-row :style="{ marginTop: '30px' }">
      <a-form-item :wrapper-col="{ span: 17, offset: 3 }">
        <a-button @click="submit" type="primary" html-type="submit" block>提交保存</a-button>
      </a-form-item>
    </a-row>
  </a-form>
</template>
<style>
</style>
<script>
import ProjectForm from "./Project";
import VeriyForm from "./Verify";
import ExchangeForm from "./Exchange";
import SubmitResult from "./SubmitResult";
import UIHelper from "../../helper/UIHelper";

export default {
  components: { ProjectForm, VeriyForm, ExchangeForm, SubmitResult },
  data() {
    return {
      current: ["project"], //project,manage,exchange
      status: "init",
      // formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    onExchangePeriodTypeChange(value) {
      console.log(value);
      // this.form.setFieldsValue({
      //   exchangeperiod: `Hi, ${value === "male" ? "man" : "lady"}!`
      // });
    },

    onDateRangeChange(date, dateString) {
      console.log("dateString", date, dateString, arguments);
      // const [projectStartDay, projectEndDay] = dateString;
      // this.form.setFieldsValue({
      //   projectStartDay,
      //   projectEndDay
      // });
    },

    submit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.current = ["result"];
          this.status = "contract";
          UIHelper.createNewProjectContract().then(address => {
            console.log("contract done", address);
            this.status = "submit";
            UIHelper.submitNewProject(values, address).then(data => {
              console.log("create project", data);
              this.status = "done";
              this.$notification.open({
                duration: 30,
                message: "你的项目创建成功",
                description: "ID: " + address,
                onClick: () => {}
              });
              //alert("你的项目创建成功。项目ID:" + address);
            });
          });
        }
      });
      //UIHelper.submitNewProject();
    },
    onSelectTab: function(key) {
      this.current = [key];
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>