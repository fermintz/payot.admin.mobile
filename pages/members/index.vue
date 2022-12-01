<template>
  <div class="members contents"> 
    <div class="members_top">
      <div class="row">
        <dl>
          <dt>회원수</dt>
          <dd>500명</dd>
        </dl>
        <dl class="point">
          <dt>전체 남은포인트</dt>
          <dd>9,454,000P</dd>
        </dl>
      </div>
      <el-divider></el-divider>
      <div class="search">
        <input type="text" placeholder="회원 전화번호로 검색">
        <el-button text circle>
          <span class="material-icons">search</span>
        </el-button>
      </div>
    </div>
    <div class="divider"></div>

    <div class="list">
      <div class="user_item">
        <div class="top">
          <div class="user_info between">
            <div class="text">
              <strong>010-8525-4561</strong>
              <span>가입일: 2022.11.11</span>
            </div>  
            <div class="point">
              <span>남은포인트</span>
              <strong>32,000P</strong>
            </div>
          </div>
          <div class="memo">
            진상고객
          </div>
        </div>
        
        <div class="bottom">
          <el-button text @click="$router.push('/members/1')">
            <strong>상세정보</strong>
            <span class="material-icons">chevron_right</span>

          </el-button>
          <el-button text @click="visible = true">
            <strong>포인트적립/차감</strong>
            <span class="material-icons">chevron_right</span>
          </el-button>
        </div>
      </div>

      <div class="user_item" v-for="item in 10" :key="item">
        <div class="top">
          <div class="user_info between">
            <div class="text">
              <strong>010-8525-4561</strong>
              <span>가입일: 2022.11.11</span>
            </div>  
            <div class="point">
              <span>남은포인트</span>
              <strong>32,000P</strong>
            </div>
          </div>
        </div>
        
        <div class="bottom">
          <el-button text @click="$router.push('/members/1')"> 
            <strong>상세정보</strong>
            <span class="material-icons">chevron_right</span>

          </el-button>
          <el-button text>
            <strong>포인트적립/차감</strong>
            <span class="material-icons">chevron_right</span>
          </el-button>
        </div>
      </div>
    </div>
    <ModalPointControl  v-model="visible"/>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'회원리스트'
})

const visible = ref(false)

</script>

<style lang="scss" scoped>
.contents{
  padding:0px;
}
.divider{
  height:10px;
  background:#f2f2f2;
}
.members_top{
  padding:20px;

  .row{
    gap:10px;
  }
  
  dl{
    flex:1;
    background:#f5f5f7;
    border-radius:10px;
    padding:14px;
    dt{
      font-size:13px;
    }
    dd{
      font-weight:500;
      margin-top:6px;
    }
  }

  .point{
    background:#EFF2F8;

    dd{
      color:#1E5DEF;
    }
  }

  .search{
    position: relative;
    margin-top:10px;
    display:flex;
    align-items: center;
    input{
      width:100%;
      height:50px;
      padding:0 40px 0 10px;
      border-radius:5px;
      border:1px solid #c2c2c2;
    }

    .el-button{
      width:40px;
      height:40px;
      position: absolute;
      font-size:20px;
      right:5px; 
    }
  }
}

.list{
  display:flex;
  flex-direction: column;
  gap:15px;
  padding:20px;
}

.user_item{
  border:1px solid #e2e2e2;
  border-radius:10px;
  .top{
    padding:14px;
    .user_info{
      .text{
        strong,span{
          display:block;
        }
        strong{
          font-weight:500;
        }
        span{
          font-size:12px;
          color:#797979;
        }
      }

      .point{
        span,strong{
          text-align:right;
          display:block;
        }
        span{
          font-size:12px;
          color:#797979;
        }
        strong{
          color:#1E5DEF;
          font-weight:600;
        }
      }
    }

    .memo{
      padding:10px;
      font-size:12px;
      border-radius:5px;
      margin-top:10px;
      background:#f5f5f7;
    }
  }

  

  .bottom{
    display:flex;
    justify-content: flex-end;
    border-top:1px solid #e2e2e2;
    .el-button{
      height:40px;
      padding:0 10px;

      strong{
        font-size:12px;
      }
      span{
        font-size:16px;
        color:#c2c2c2;
        margin-left:5px;
        background:#f2f2f2;
        border-radius:10px;
      }
    }
  }
}
</style>