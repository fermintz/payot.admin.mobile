<template>
  <div class="wrap">
    <div class="header row">
      <el-button text circle @click="$router.go(-1)">
        <span class="material-icons">arrow_back</span>
      </el-button>
      <h2>
        {{route.meta.name}}
      </h2>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

</script>

<style lang="scss" scoped>
.header{
  z-index:999;
  padding:0 10px;
  height:60px;
  align-items:center;
  position: sticky;
  top:0;
  background:#fff;
  .el-button{
    width:40px;
    height:40px;
    margin-right:10px;
  }
  h2{
    font-size:18px;
    font-weight:600;
  }
}

</style>