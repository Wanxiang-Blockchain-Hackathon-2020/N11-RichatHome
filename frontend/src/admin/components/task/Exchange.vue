<template>
  <a-col :span="17" :offset="3" v-show="show">
    <a-form-item label="积分名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'token_symbol',
          {rules: [{ required: true, message: '*' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="数量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'total_budget',
          {rules: [{ required: true, message: '数量' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="兑换类型：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-radio-group
        @change="onExchangeTypeChange"
        buttonStyle="solid"
        name="exchangeType"
        v-decorator="[
          'exchangeType',
          {initalValue:'pool'}
        ]"
      >
        <a-radio-button value="fixed">固定单价</a-radio-button>
        <a-radio-button value="pool">瓜分奖金池</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      label="兑换比率"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      v-show="type=='fixed' || type=='pool' "
    >
      <a-input
        v-decorator="[
          'rate',
          {rules: [{ required: true, message: '*' }]}
        ]"
      />
    </a-form-item>

    <a-form-item
      label="兑换周期："
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      v-show="type=='pool'"
    >
      <a-select
        name="exchangePeriodType"
        v-decorator="[
          'exchangePeriodType',
          {initalValue:'day'}
        ]"
        style="width: 120px"
        @change="onExchangePeriodTypeChange"
      >
        <a-select-option value="day">每天</a-select-option>
        <a-select-option value="month">每月</a-select-option>
        <a-select-option value="year">每年</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      label="每期奖励币数量"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      v-show="type=='pool'"
    >
      <a-input
        v-decorator="[
          'pool_budget',
          {initValue:'0', rules: [{ required: false, message: '每期奖励币数量' }]}
        ]"
      />
    </a-form-item>
  </a-col>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    onExchangePeriodTypeChange: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      type: ""
    };
  },

  methods: {
    onExchangeTypeChange(selected) {
      console.log(`selected `, selected.target.value);
      this.type = selected.target.value;
    }
  }
};
</script>