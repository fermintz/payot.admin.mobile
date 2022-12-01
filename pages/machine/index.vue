<template>
  <div class="machine">
    <div class="page_top">
      <dl>
        <dt>키오스크 선택</dt>
        <dd>
          <el-select v-model="kioskSelect" size="large">
            <el-option v-for="item in options" :key="item.label" :value="item.label" style="font-size:16px;height:40px;">

            </el-option>
          </el-select>
        </dd>
      </dl>
    </div>
    <div class="divider">

    </div>
    <div class="list">
      <dl class="between" v-for="item in 5" :key="item" @click="$router.push('/machine/1')">
        <dt>
          <strong>{{item}}번세탁기 27kg</strong>
          <span>등록된 상품 <b>12</b></span>
        </dt>
        <dd>
          <span class="material-icons">chevron_right</span> 
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'장비상품관리'
})

const kioskSelect = ref('키오스크1')
const options = [
  {
    valeu:1,
    label:'키오스크1',
  },
  {
    valeu:2,
    label:'키오스크2',
  }
]
</script>

<style lang="scss" scoped>
.page_top{
  padding:20px;
  dl{
    dt{
      margin-bottom:10px;
      font-weight:500;
      font-size:14px;
    }
  }

  .el-select{
    width:100%;
  }
}

.divider{
  height:10px;
  background:#f2f2f2;
}

.list{

  dl{
    border-bottom:1px solid #e2e2e2;
    padding:20px;
    cursor: pointer;
    dt{
      strong,span{
        display:block;
        font-weight:500;
      }
      span{
        margin-top:5px;
        font-size:13px;
        color:#797979;
        b{color:#1E5DEF}
      }
    }
    dd{
      span{
        background:#f2f2f2;
        border-radius:12px;
        color:#c2c2c2;
      }
    }
  }
}
</style>