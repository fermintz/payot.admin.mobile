<template>
  <div class="menu">

    <div class="head between">
      <h2>전체메뉴</h2>
      <el-button text circle @click="$router.push('/')">
        <span class="material-icons">
          close
        </span>
      </el-button>
    </div>

    <div class="middle">
      <dl>
        <dt>
          <span class="material-icons">bar_chart</span>
          <strong>매출/통계</strong>
        </dt>
        <dd>
          <el-button @click="$router.push('/usageHistory')">
            이용내역
          </el-button>
          <el-button @click="$router.push('/sales')">
            매출통계
          </el-button>
          <el-button @click="$router.push('/comparison')">
            매출비교
          </el-button>
        </dd>
      </dl>
      <dl>
        <dt>
          <span class="material-icons">person</span>
          <strong>회원관리</strong>
        </dt>
        <dd>
          <el-button @click="$router.push('/members')">
            회원리스트
          </el-button>
          <el-button @click="$router.push('/members/sms')">
            문자보내기
          </el-button>
        </dd>
      </dl>
      <dl>
        <dt>
          <span class="material-icons">settings</span>
          <strong>관리/설정</strong>
        </dt>
        <dd>
          <el-button @click="$router.push('/kioskSetting')">
            키오스크 설정
          </el-button>
          <el-button @click="$router.push('/kioskRemote')">
            키오스크 원격제어
          </el-button>
          <el-button @click="$router.push('/machine')">
            장비 상품관리
          </el-button>
          <el-button @click="$router.push('/eqRemote')">
            장비 원격제어
          </el-button>
          <el-button @click="$router.push('/warningSound')">
            경고방송 송출
          </el-button>
          <el-button @click="$router.push('/savingPoint')">
            기본 적립률 설정
          </el-button>
          <el-button @click="$router.push('/savingEvent')">
            적립률 이벤트설정
          </el-button>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty',
  name:'전체메뉴'
})
</script>

<style lang="scss" scoped>

.menu{
  padding:20px;
  .head{
    font-size:24px;
    color:#292929;
    margin-bottom:30px;
    .el-button{
      width:40px;
      height:40px;
      span{
        font-size:24px;
      }
    }
    
  }

  .middle{
    display:flex;
    flex-direction: column;
    gap:40px;
    
    dl{
      dt{
        display:flex;
        span{
          margin-right:8px;
        }
        strong{
          font-size:18px;
        }
      }
      dd{
        margin-top:15px;
        display:grid;
        gap:10px;
        grid-template-columns: 1fr 1fr;
        
        .el-button{
          height:40px;
          font-size:14px;
        }
      }
    }
  }

}

</style>