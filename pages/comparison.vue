<template>
  <div class="comparison contents">
    <div class="chart">
      <p>최근 3개월동안의 매출을 통계낸 자료입니다</p>
      <BarChart :data="chartData" :options="chartOptions" :height="200"/>
    </div>

    <div class="summary">
      <dl v-for="item in ['나의평균','전국평균','상위평균','하위평균']" :key="item">
        <dt>
          <span>{{item}}</span>
          <strong>1,450,000원</strong>
        </dt>
        <dd>
          <ul>
            <li class="between">
              <span>스마트페이</span>
              <strong>340,000원</strong>
            </li>
            <li class="between">
              <span>카드</span>
              <strong>285,000원</strong>
            </li>
            <li class="between">
              <span>지폐</span>
              <strong>182,000원</strong>
            </li>
            <li class="between">
              <span>동전</span>
              <strong>75,000원</strong>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { TChartData } from "vue-chartjs/dist/types"

definePageMeta({
  layout:'sub',
  name:'타 매장 매출비교'
})


const chartData: TChartData<'bar', number[], unknown> = {
  labels: [
    "나의매장",
    "전국평균",
    "상위평균",
    "하위평균",
  ],
  datasets: [
    {
      label: "매출",
      data: [1450000, 980000, 1230000, 560000],
      backgroundColor: ["#135EF2","#0D378C","#3E588C","#77A1D9"],
      borderColor: "rgba(100, 255, 0, 1)",
      borderWidth:0, // 막대선 두께
      base:0,
      barPercentage:0.25, // 막대두께(퍼센트)
      maxBarThickness:50, // 최대 막대 두께제한
      minBarLength:5,
      indexAxis:'x',
      borderRadius:3,

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
      enabled:false,
    },
    decimation:{
      enabled:true,
    },
    legend:{
      display:false,
    },
    datalabels:{
      color:'#292929',
      backgroundColor:'#fff',
      borderRadius:3,
      anchor:'end',
      align:'end',
      font:{
        size:12,
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.comparison{
  .chart{
    p{
      font-size:14px;
      color:#797979;
      margin-bottom:15px;
    }
  }

  .summary{
    display:flex;
    flex-direction: column;
    gap:15px;
    margin-top:40px;
    dl{
      border:1px solid #e2e2e2;
      padding:14px;
      border-radius:5px;
      dt{
        strong,span{
          display:block;
        }
        span{
          font-size:14px;
          font-weight:500;
        }
        strong{
          font-size:18px;
          font-weight:600;
          margin-top:5px;
          color:#1E5DEF;
        }
      }
      dd{
        margin-top:14px;
        padding-top:14px;
        border-top:1px solid #e2e2e2;
        ul{
          display:flex;
          flex-direction: column;
          gap:5px;
          li{
            span,strong{
              font-size:14px;
            }
            span{color:#797979;}
            strong{
              font-weight:500;
            }
          }
        }
      }
    }
  }
}
</style>