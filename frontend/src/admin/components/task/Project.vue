<template>
  <a-col :span="17" :offset="3" v-show="show">
    <a-form-item label="任务名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'name',
          {rules: [{ required: true, message: '任务名称' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="任务描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'info',
          {rules: [{ required: true, message: '任务描述' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="发包方" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'sender_name',
          {rules: [{ required: true, message: '发包方' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="发包链接" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'sender_url',
          {rules: [{ required: true, message: '发包链接' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="开始 / 结束时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-range-picker
        @change="onDateRangeChange"
        name="projectDateRange"
        v-decorator="[
          'projectDateRange'
        ]"
      />
    </a-form-item>
    <!-- <input type="hidden" name="projectStartDay" />
    <input type="hidden" name="projectEndDay" />-->
    <!-- <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-select
        v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">male</a-select-option>
        <a-select-option value="female">female</a-select-option>
      </a-select>
    </a-form-item>-->
  </a-col>
</template>
<script>
import Project from "@/common/entity/project";

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    onDateRangeChange: {
      type: Function,
      default: function() {}
    }
  },
  mounted() {
    const newProject = new Project();
    console.log("project", newProject);
  }
};
</script>