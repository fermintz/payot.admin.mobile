<template>
  <div class="month_sales">
    <div class="selector between">
      <el-button circle text>
        <span class="material-icons">chevron_left</span>
      </el-button>
      <h2>2022.10</h2>
      <el-button circle text>
        <span class="material-icons">chevron_right</span>
      </el-button>
    </div>

    <div class="dashboard row">
      <div class="col">
        <dl class="box sales">
          <dt>
            <h5>월매출</h5>
            <strong>3,156,000원</strong>
          </dt>
          <dd>
            <ul>
              <li>
                <span>스마트페이</span>
                <strong>1,130,000원</strong>
              </li>
              <li>
                <span>카드</span>
                <strong>849,000원</strong>
              </li>
              <li>
                <span>지폐</span>
                <strong>235,000원</strong>
              </li>
              <li>
                <span>동전</span>
                <strong>175,000원</strong>
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="box week">
          <dt>이용이 가장 많은 요일</dt>
          <dd>
            일요일
          </dd>
        </dl>
      </div>
      <div class="col">
        <dl class="box max">
          <dt>매출이 가장 높은 일</dt>
          <dd class="between">
            <span>14일(일)</span>
            <strong>185,000원</strong>
          </dd>
        </dl>
        <dl class="box min">
          <dt>매출이 가장 낮은 일</dt>
          <dd class="between">
            <span>2일(수)</span>
            <strong>55,000원</strong>
          </dd>
        </dl>
        <dl class="box avg">
          <dt>일 평균 매출</dt>
          <dd>
            134,500원
          </dd>
        </dl>
        <dl class="box member">
          <dt>10월 가입회원 수</dt>
          <dd>22명</dd>
        </dl>
      </div>
    </div>

    <div class="chart">
      <BarChart :data="chartData" :options="chartOptions" :height="250"/>
      <div class="x_name between">
        <span>1일</span>
        <span>31일</span>
      </div>
    </div>

    

    <div class="sales_table">
      <dl v-for="item in 31" :key="item">
        <dt>{{item}}일</dt>
        <dd>1,248,000원</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TChartData } from "vue-chartjs/dist/types"

definePageMeta({
  layout:'sub',
  name:'월 매출 상세정보'
})

const chartData: TChartData<'bar', number[], unknown> = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ],
  datasets: [
    {
      label: "매출",
      data: [145000, 98000, 123000, 56000, 78000, 124000, 133000,145000, 98000, 123000, 56000, 78000, 124000, 133000,23550,145000, 98000, 123000, 56000, 78000, 124000, 133000,145000, 98000, 123000, 56000, 78000, 124000, 133000,93550,46400],
      backgroundColor: "rgba(30, 93, 239, 1)",
      borderWidth:0, // 막대선 두께
      base:0,
      barPercentage:0.6, // 막대두께(퍼센트)
      indexAxis:'x',
      borderRadius:3,
      hoverBackgroundColor: "rgba(0, 0, 0, 1)"
    },
  ],
}

const chartOptions = {
  responsive:true,
  layout:{
    padding:{
      top:30
    },
  },
  scales:{
    x:{
      grid:{
        display:false,
        borderWidth:1,
        borderColor:'rgba(0,0,0,1)'
      },
      ticks:{
        display:false,
      },
    },
    y:{
      grid:{
        display:false,
        borderWidth:0,     
      },
      ticks:{
        display:false,
      },
    }
  },
  plugins:{
    tooltip:{
      enabled:true,
    },
    decimation:{
      enabled:true,
    },
    legend:{
      display:false,
    },
    datalabels:{
      display:false,
    },
  },
}

</script>

<style lang="scss" scoped>
.month_sales{
  padding:20px;
}
.selector{
  h2{
    font-size:24px;
    font-weight:600;
  }
  .el-button{
    width:36px;
    height:36px;
    background:#f2f2f2;
  }
}

.chart{
  .x_name{
    span{
      font-size:10px;
    }
  }
}

.dashboard{
  margin-top:40px;
  gap:10px;
  .col{
    flex:1;
    display:flex;
    flex-direction: column;
    gap:10px;
  }
  .box{
    min-height:80px;
    background:#f2f2f2;
    border-radius:10px;
    padding:14px;
    
    dt{
      font-size:13px;
    }
  }
  .sales{
    min-height:170px;
    dt{
      strong{
        font-size:18px;
        font-weight:600;
      }
    }
    dd{
      padding-top:10px;
      border-top:1px solid #e2e2e2;
      margin-top:10px;
      ul{
        display:flex;
        flex-direction: column;
        gap:5px;
        li{
          display:flex;
          justify-content: space-between;
          span,strong{
            font-size:10px;
          }
          span{
            color:#797979;
          }
          strong{
            font-weight:500;
          }
        }
      }
    }
  }

  .max, .min {
    display:flex;
    flex-direction: column;
    justify-content: space-between;

    dd{
      span, strong{
        font-size:14px;
      }
      span{
        font-size:12px;
      }
      strong{
        font-size:16px;
        font-weight:500;
      }
    }
  }
  .max{
    background:#F9F2F4;
    dd{
      strong{color:#E61245}
    }
  }
  .min{
    background:#E4E9F5;
    dd{
      strong{
        
        color:#1E5DEF;
      }
    }
  }
  .avg, .member, .week{
    display:flex;
    flex-direction: column;
    justify-content: space-between;

    dd{
      text-align:right;
      font-size:16px;
      font-weight:500;
    }
  }
}

.sales_table{
  padding:40px 0;
  display:grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  dl{
    border-bottom:1px solid #e2e2e2;
    padding:10px 5px;
    dt{
      font-size:11px;
      margin-bottom:5px;
      color:#797979;
    }
    dd{
      font-size:11px;
      font-weight:500;
    }
  }
}

</style>