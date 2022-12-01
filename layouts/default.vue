<template>
  <div class="wrap">
    <header class="between">
      <div class="logo row">
        <img src="@/assets/img/logo.png">
        <div class="text column">
          <strong>워시앤클린</strong>
          <span>광안점</span>
        </div>
      </div>
      <div class="btns">

        <el-button text circle @click="$router.push('/shopSelector')">
          <span class="material-icons">storefront</span>
  
        </el-button>
        
        
        
        <el-button text circle @click="$router.push('/menu')">
          <span class="material-icons">menu</span>
        </el-button>
      </div>
    </header>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@element-plus/icons-vue'

const shop = ref(false)
const shopChange = ()=>{
  shop.value.handleOpen()
}

</script>

<style lang="scss" scoped>

.wrap{
  
}

header{
  padding:0 20px;
  height:90px;
  .logo{
    align-items: center;
    img{
      height:45px;
    }
    .text{
      margin-left:15px;
      strong,span{
        display:block;
      }
      strong{
        font-size:18px;
        font-weight:500;
      }
      span{
        font-size:12px;
        color:#1E5DEF;
      }
    }
  }

  .btns{
    .el-button{
      width:50px;
      height:50px;
      color:#292929;
    }
  }
}

</style>