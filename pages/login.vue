<template>
  <div class="login">
    <div class="head between">
      <img src="~/assets/img/logo.png"/>
      <span>페이오티<br/>모바일관리자</span>
    </div>
    <h2>Login</h2>
    <form>
      <el-input
        v-model="userId"
        placeholder="이메일"
        :prefix-icon="User"
      />
      <el-input
        v-model="userPassword"
        placeholder="비밀번호"
        :prefix-icon="Lock"
        show-password
      />
      <el-button>
        로그인
      </el-button>
    </form>
    <div class="bottom">
      <el-divider></el-divider>
      <el-button text>
        카카오톡으로 문의하기
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'

const userId = ref('')
const userPassword = ref('')

definePageMeta({
  layout:'empty'
})

</script>

<style lang="scss" scoped>
.login{
  padding:30px;
  background:#f5f5f7;
  height:100vh;
  .head{
    margin-bottom:60px;
    img{
      height:50px;
    }
    span{
      text-align:right;
      color:#797979;
    }
  }
  

  h2{
    margin-bottom:15px;
    font-size:45px;
    font-weight:600;
  }

  form{
    display:flex;
    flex-direction: column;
    gap:10px;

    .el-input{
      height:50px;
    }
    .el-button{
      height:50px;
      background:#1E5DEF;
      border:0;
      color:#fff;
    }
  }

  .bottom{
    .el-button{
      height:50px;
      width:100%;
      background:#FAE100;
    }
  }
}

</style>