<template>
  <div class="addSavingEvent contents">
    <dl class="week">
      <dt>적용요일</dt>
      <dd>
        <el-checkbox-group v-model="checkboxGroup1" fill="#1E5DEF">
          <el-checkbox-button v-for="item in ['월','화','수','목','금','토','일']" :key="item" :label="item">
            {{ item }}
          </el-checkbox-button>
        </el-checkbox-group>
      </dd>
    </dl>
    <el-divider />
    <dl class="time">
      <dt>적용시간</dt>
      <dd class="row">
        <el-button plain @click="visible = true">{{time1}}</el-button>
        <span>~</span>
        <el-button plain>{{time2}}</el-button>
      </dd>
    </dl>
    <el-divider />
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

    <div class="bottom">
      <el-button plain>
        등록완료
      </el-button>
    </div>

    <ModalTimePicker v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'적립률 이벤트 등록'
})
const visible = ref(false)
const checkboxGroup1 = ref()

const time1 = ref('시간선택')
const time2 = ref('시간선택')

</script>

<style lang="scss" scoped>
.addSavingEvent{
  padding-bottom:100px;
  dl{
    dt{
      font-weight:500;
      margin-bottom:15px;
    }
  }
  .week{
    dd{
      justify-content: space-around;
      .el-button{
        height:30px;
      }
      .el-button.active{
        background:#1E5DEF;
        color:#fff;
        border:0;
      }
    }
  }

  .time{
    dd{
      align-items: center;
      gap:5px;
      span{
        margin:0 5px;
      }
      .el-button{
        flex:1;
        border-radius:20px;
        height:40px;
        font-size:13px;
        background:#f5f5f7;
        border:0;
      }
    }
  }


  .list{
    display:flex;
    flex-direction: column;
    
    gap:15px;
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

  .bottom{
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    .el-button{
      width:100%;
      background:#1E5DEF;
      border:0;
      border-radius:0;
      color:#fff;
      height:50px;
    }
  }
}
</style>