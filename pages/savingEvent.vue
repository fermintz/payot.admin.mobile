<template>
  <div class="savingEvent">
    <div class="page_top">
      <dl>
        <dt>키오스크 선택</dt>
        <dd>
          <el-select v-model="kioskSelect" size="large">
            <el-option v-for="item in options" 
              :key="item.label" 
              :value="item.label" 
              style="font-size:16px;height:40px;"
            >
            </el-option>
          </el-select>
        </dd>
      </dl>
    </div>
    <div class="divider"></div>

    <div class="list-top between">
      <h4>등록된 이벤트</h4>
      <el-button plain @click="$router.push('/addSavingEvent')">
        <span class="material-icons">add</span>
        <strong>이벤트등록</strong>
      </el-button>
    </div>
    <div class="list">
      <div class="item">
        <dl class="week">
          <dt>적용요일</dt>
          <dd>
            <span class="active box-center">월</span>
            <span class="active box-center">화</span>
            <span class="box-center">수</span>
            <span class="box-center">목</span>
            <span class="box-center">금</span>
            <span class="box-center">토</span>
            <span class="box-center">일</span>
          </dd>
        </dl>
        <el-divider />
        <dl class="time between">
          <dt>적용시간</dt>
          <dd>
            <span class="box-center">
              10:00 ~ 14:00
            </span>
          </dd>
        </dl>
        <el-divider />

        <table>
          <thead>
            <tr>
              <th>금액구간</th>
              <th>카드</th>
              <th>지폐</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1만원 미만 결제시</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>1만원 ~ 2만원미만</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>2만원 ~ 3만원미만</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>3만원 ~ 4만원미만</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>4만원 ~ 5만원미만</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>5만원이상</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
          </tbody>
          
        </table>
 
        <el-divider />
        <div class="bottom">
          <el-button plain>수정하기</el-button>
          <el-button plain>삭제하기</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'적립률 이벤트 설정'
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
      font-size:16px;
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

.savingEvent{
  .list-top{
    padding:20px;
    padding-bottom:0;

    h4{
      font-size:16x;
      font-weight:500;
    }

    .el-button{
      height:34px;
      border-radius:17px;
      border:1px solid #1E5DEF;
      color:#1E5DEF;
      padding:0 12px;
      span{
        font-size:16px;
        margin-right:3px;
      }
      strong{
        font-size:12px;
      }
    }
  }

  .list{
    display:Flex;
    flex-direction: column;
    gap:15px;
    padding:20px;
    .item{
      border:1px solid #e2e2e2;
      border-radius:10px;
      overflow:hidden;
      padding:14px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

      .el-divider{
        margin:14px 0;
      }

      dl{
        dt{
          font-size:14px;
          font-weight:500;
        }
      }

      dl.week{
        dt{
          margin-bottom:10px;
        }
        dd{
          display:flex;
          justify-content: space-around;
          span{
            width:26px;
            height:26px;
            font-size:13px;
            border-radius:13px;
          }
          span.active{
            color:#1E5DEF;
            background:#EFF2F8;
          }
        }
      }
      dl.time{
        dd{
          span{
            height:26px;
            border-radius:13px;
            background:#EFF2F8;
            color:#1E5DEF;
            font-size:13px;
            padding:0 15px;
            font-weight:500;
          }
        }
      }
      
      table{
        width:100%;
        text-align:center;
        font-size:13px;
        border-collapse: separate;
        border-spacing: 0 8px;
        th{
          font-weight:bold;
          font-size:14px;
        }
        th,td{
          padding:5px;
        }
        th:first-child, td:first-child{
          text-align:left;
        }
        td:nth-child(2){
          background:#f2f2f2;
          border-radius:5px 0 0 5px;
        }
        td:nth-child(3){
          background:#f2f2f2;
          border-radius:0 5px 5px 0;
        }
      }

      .bottom{
        display:flex;
        align-items: center;
        gap:10px;
        .el-button{
          flex:1;
          height:40px;
          border:1px solid #c2c2c2;
        }
      }
    }
  }
}
</style>