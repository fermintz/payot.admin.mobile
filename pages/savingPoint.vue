<template>
  <div class="savingPoint">
    <div class="page_top">
      <p>결제될때 적립되는 적립률을 설정합니다.
현금결제시, 카드결제시 다르게 적립률을 설정 할 수 있습니다.</p>
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
    <div class="divider"></div>
    <div class="list">
      <dl>
        <dt>1만원 미만시</dt>
        <dd>
          <div class="row">
            <div class="col">
              <span>현금</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
            <div class="col">
              <span>카드</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
          </div>
        </dd>
      </dl>

      <dl>
        <dt>1만원 ~ 2만원 미만</dt>
        <dd>
          <div class="row">
            <div class="col">
              <span>현금</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
            <div class="col">
              <span>카드</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
          </div>
        </dd>
      </dl>

      <dl>
        <dt>2만원 ~ 3만원 미만</dt>
        <dd>
          <div class="row">
            <div class="col">
              <span>현금</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
            <div class="col">
              <span>카드</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
          </div>
        </dd>
      </dl>

      <dl>
        <dt>3만원 ~ 4만원 미만</dt>
        <dd>
          <div class="row">
            <div class="col">
              <span>현금</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
            <div class="col">
              <span>카드</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
          </div>
        </dd>
      </dl>

      <dl>
        <dt>5만원 이상 결제시</dt>
        <dd>
          <div class="row">
            <div class="col">
              <span>현금</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
            <div class="col">
              <span>카드</span>
              <el-input type="number" placeholder="0"></el-input>
              <span>%</span>
            </div>
          </div>
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
  name:'적립률 설정'
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
  padding-top:0;
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

  p{
    font-size:14px;
    color:#797979;
    margin-bottom:20px;
  }
}

.divider{
  height:10px;
  background:#f2f2f2;
}

.list{
  display:flex;
  flex-direction: column;
  gap:20px;
  padding:20px;
  padding-bottom:100px;


  dl{
    dt{
      margin-bottom:10px;
      font-size:14px;
      font-weight:500;
    }
    dd{
      .row{
        background:#f5f5f7;
        border-radius:4px;
        height:50px;
        
        .col{
          flex:1;
          display:flex;
          align-items: center;
          padding:5px 10px;
          border-right:1px solid #e2e2e2;

          &:last-child{
            border-right:0;
          }
        }

        .el-input{
          margin:0 10px;
        }
        span{
          font-size:12px;
        }
      }
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