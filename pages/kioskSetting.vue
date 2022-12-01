<template>
  <div class="kioskSetting">
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
      <dl class="notice">
        <dt>
          <strong>공지사항</strong>
          <span>키오스에 메인화면 공지사항을 변경할 수 있습니다.</span>
        </dt>
        <dd>
          <div class="images">
            <img src="~/assets/img/notice_screen.jpg" />
          </div>
          <el-input 
            v-model="notice" 
            type="textarea" 
            placeholder="충전이벤트 진행중! 현금충전시 추가적립 10%"
            :autosize="{minRows:4}"
            show-word-limit
            maxlength="100"
          >
          </el-input>
        </dd>
      </dl>

      
      <el-divider></el-divider>
      <dl class="product">
        <dt>
          <strong>키오스크 상품선택</strong>
          <span>상품선택 및 금액직접입력 방식 중 선택하여 사용할 수 있습니다.</span>
        </dt>
        <dd>
          <div class="row">
            <div class="radio" @click="radio1 = 1">
              <strong>
                <img src="~/assets/img/product01.jpg">
              </strong>
              <span>이용자 금액 지정방식</span>
            </div>
            <div class="radio" @click="radio1 = 2">
              <strong>
                <img src="~/assets/img/product01.jpg">
              </strong>
              <span>상품(금액) 선택방식</span>
            </div>
          </div>
          <el-radio-group v-model="radio1">
            <el-radio :label="1" size="large">
              <span></span>
            </el-radio>
            <el-radio :label="2" size="large">
              <span></span>
            </el-radio>
          </el-radio-group>
        </dd>
      </dl>
      <el-divider></el-divider>
      <dl class="between switch">
        <dt>
          <strong>
            회원 비밀번호 사용
          </strong>
          <span>
            키오스크 사용시 회원들이 비밀번호 기능을 사용할 수 있도록 설정할 수 있습니다.
          </span>
        </dt>
        <dd>
          <el-switch
            v-model="switch1"
          />
        </dd>
      </dl>
      <el-divider></el-divider>
      <dl class="between switch">
        <dt>
          <strong>
            카드결제 활성화
          </strong>
          <span>
            키오스크의 카드결제 사용유무를 설정합니다.
          </span>
        </dt>
        <dd>
          <el-switch
            v-model="switch2"
          />
        </dd>
      </dl>
    </div>

    <div class="page_bottom">
      <el-button plain>
        저장하기
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'키오스크 설정'
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

const notice = ref('')
const radio1 = ref(1)
const switch1 = ref(true)
const switch2 = ref(true)
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
  padding:20px;
  padding-bottom:100px;


  .el-divider{
    margin:30px 0;
  }

  dl{
    dt{
      margin-bottom:10px;
      strong,span{
        display:block;
        font-weight:500;
      }
      span{
        font-size:14px;
        color:#797979;
        margin-top:5px;
      }
    }
  }

  .notice{
    dd{
      .images{
        margin-bottom:25px;
        img{
          width:100%;
          border-radius:5px;
          border:1px solid #e2e2e2;
        }
      }
      textarea{
        height:80px;
      }
    }
  }

  .product{
    dt{
      margin-bottom:20px;
    }
    .row{
      gap:15px;
      .radio{
        flex:1;
        display:flex;
        flex-direction: column;
        img{
          width:100%;
          border-radius:5px;
          margin-bottom:20px;
          border:1px solid #e2e2e2;
        }
        span{
          font-size:14px;
          text-align:center;
        }
      }
    }
    .el-radio-group{
      display:flex;
      gap:20px;
      .el-radio{
        margin:0;
        padding:0;
        display:flex;
        justify-content: center;
        flex:1;
      }
    }
  }

  .switch{
    gap:50px;
    dt{
      margin-bottom:0;
    }
    dd{
    }
  }
}

.page_bottom{
  position: fixed;;
  bottom:0;
  left:0;
  width:100%;
  display:flex;

  .el-button{
    width:100%;
    border:0;
    border-radius:0;
    height:50px;
    background:#1E5DEF;
    color:#fff;
  }
}
</style>