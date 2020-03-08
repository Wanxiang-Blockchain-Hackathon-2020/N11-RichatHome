<template>
  <a-row>
    <a-col :span="12">
      <header>
        <div class="ant-page-header-heading">
          <span>平台任务：5,370个</span>
          <a-switch :style="{float: 'right'}" defaultChecked @change="onChange" />
        </div>
      </header>
      <a-table :showHeader="false" :columns="columns" :dataSource="data">
        <span slot="action" slot-scope="text, record">
          <a-button type="primary">查看</a-button>
        </span>
      </a-table>
    </a-col>
    <a-col :span="12">
      <header>
        <div class="ant-page-header-heading">
          <span>平台任务：5,370个</span>
          <a-switch :style="{float: 'right'}" defaultChecked @change="onChange" />
        </div>
      </header>
      <a-table :showHeader="false" :columns="columns" :dataSource="data">
        <span slot="action" slot-scope="text, record">
          <a-button type="primary">查看</a-button>
        </span>
      </a-table>
    </a-col>
  </a-row>
</template>

<script>
const columns = [
  {
    dataIndex: "type",
    key: "type",
    title: "Type"
  },
  {
    dataIndex: "source",
    key: "source",
    title: "Source"
  },
  {
    dataIndex: "detail",
    key: "detail",
    title: "Detail"
  },
  {
    dataIndex: "contract",
    key: "contract",
    title: "Contract"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    type: "社交分享",
    source: "亦来云官方",
    detail: "已发放27475个",
    contract: "合约地址"
  },
  {
    type: "社交分享",
    source: "亦来云官方",
    detail: "已发放27475个",
    contract: "合约地址"
  },
  {
    type: "社交分享",
    source: "亦来云官方",
    detail: "已发放27475个",
    contract: "合约地址"
  }
];

export default {
  methods: {
    onChange() {}
  },
  data() {
    return {
      data,
      columns
    };
  }
};
</script>