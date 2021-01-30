<template>
  <div class="container">
    <!-- <el-button type="primary" size="small" @click="add()">加</el-button> -->
    <el-input
      v-model.number="sum1"
      size="small"
      width="15%"
      @input="add"
    ></el-input>
    +
    <el-input
      v-model.number="sum2"
      size="small"
      width="15%"
      @input="add"
    ></el-input>
    =
    <el-input v-model.number="sumTotal" size="small" width="15%"></el-input>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
@Component
export default class support extends Vue {
  private sum1: number = 0;
  private sum2: number = 0;
  private sumTotal: number = 0;

  mounted(): void {
    console.log(this);
  }
  add(): void {
    this.sumTotal = this.sum1 + this.sum2;
  }
}
</script>

<style>
.el-input {
  width: 15%;
}
</style>
<style lang="scss" scoped></style>
