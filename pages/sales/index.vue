<template>
  <div class="sales contents">
    <div class="selector between">
      <el-button circle text>
        <span class="material-icons">chevron_left</span>
      </el-button>
      <h2>2022</h2>
      <el-button circle text>
        <span class="material-icons">chevron_right</span>
      </el-button>
    </div>

    <div class="summary">
      <dl>
        <dt>2022년 총 매출</dt>
        <dd>23,433,000원</dd>
      </dl>
      
      
      <div class="chart">
        <div class="pieChart">
          <PieChart />
        </div>
        
        <div class="legend">
          <dl class="row">
            <dt class="smart"></dt>
            <dd>
              <label>스마트페이</label>
              <strong>8,309,000원</strong>
            </dd>
          </dl>
          <dl class="row">
            <dt class="card"></dt>
            <dd>
              <label>키오스크-카드</label>
              <strong>3,309,000원</strong>
            </dd>
          </dl>
          <dl class="row">
            <dt class="cash"></dt>
            <dd>
              <label>키오스크-지폐</label>
              <strong>1,809,000원</strong>
            </dd>
          </dl>
          <dl class="row">
            <dt class="coin"></dt>
            <dd>
              <label>동전매출</label>
              <strong>981,000원</strong>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <el-divider />

    <div class="chart">
      <lineChart :data="chartData" :options="chartOptions" :height="200"/>
    </div>

    <div class="list">
      <dl v-for="item in 10" :key="item" @click="$router.push('/sales/1')">
        <dt>{{item}}월</dt>
        <dd>17,360,000</dd>
      </dl>
      <dl class="toMonth">
        <dt>11월</dt>
        <dd>집계중</dd>
      </dl>
      <dl>
        <dt>12월</dt>
        <dd>-</dd>
      </dl>
    </div>

    <div class="tip">
      <p>월 매출을 터치하시면 상세한 내역을 확인할 수 있습니다.</p>
      <p>월 매출은  월이 종료된 시점에 매출이 표기됩니다.</p>
    </div>

    

    
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'2022년 매출',
})

const chartData = {
  labels: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  datasets: [
    {
      label: "매출",
      data: [3450000, 2980000, 1230000, 2600000, 2800000, 2480000, 2950000, 2480000, 3380000, 2850000, 0, 0],
      borderColor: "rgba(30, 93, 239, 1)",
      borderWidth: 2, // 막대선 두께
      fill: true,
      backgroundColor:"rgba(30, 93, 239, 0.05)",
      base:0,
      barPercentage:0.5, // 막대두께(퍼센트)
      maxBarThickness:20, // 최대 막대 두께제한
      minBarLength:5,
      borderRadius:5,
      indexAxis:'x',
    },
  ],
}

const chartOptions = {
  responsive:true,
  layout:{
    padding:{
      top:0
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
        font:{
          size:9,
        },
      }
    },
    y:{
      grid:{
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
.selector{
  margin-bottom:40px;
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

.sales{
  padding:20px;
  padding-bottom:100px;
  .list{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:10px;
    margin-top:30px;
    
    dl{
      padding:10px;
      background:#fff;
      border-radius:5px;
      border:1px solid #e2e2e2;

      dt{
        font-size:14px;
      }
      dd{
        font-size:14px;
        font-weight:600;
        margin-top:10px;
      }
    }

    .toMonth{
      border:1px solid #1E5DEF;
      dt{
        color:#1E5DEF;
      }
    }
  }

  .tip{
    display:flex;
    flex-direction: column;
    gap:5px;
    margin-top:30px;
    p{
      font-size:12px;
      color:#797979;
      &:before{
        content:'*';
        color:#E61245;
        margin-right:3px;
      }
    }
  }

  .el-divider{
    margin:40px 0;
  }

  .summary{
    dl{
      dt{
        color:#797979;
      }
      dd{
        font-size:24px;
        font-weight:600;
      }
    }

    .chart{
      align-self: center;
      width:100%;

      .pieChart{
        padding:0 40px;
      }
    }

    .legend{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;

      dl{
        gap:10px;
        padding:14px;
        border-radius:10px;
        background:#f2f2f2;
        dt{
          width:10px;
          height:10px;

          &.smart{
            background:#0049f2;
          }
          &.card{
            background:#df0034;
          }
          &.cash{      
          background:#00c21a;
          }
          &.coin{      
          background:#c2c2c2;
          }
        }
        dd{
          flex:1;
          label,strong{
            display:block;
          }
          
          label{
            line-height:1;
            font-size:12px;
          }
          strong{
            font-size:16px;
            margin-top:8px;
            font-weight:500;
          }
        }
      }      
    }

  }
}
</style>