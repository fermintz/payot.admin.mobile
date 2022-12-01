<template>
  <Pie :chart-data="barChartData" :chart-options="options" />
</template>

<script lang="ts" setup>
import {Chart, registerables} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {Pie} from 'vue-chartjs'

Chart.register(...registerables, ChartDataLabels);

const barChartData = {
  labels: [
    "스마트페이",
    "키오스크-카드",
    "키오스크-지폐",
    "동전매출",
  ],
  datasets: [
    {
      label: "매출",
      data: [45, 35, 10, 10],
      backgroundColor: ["#1E5DEF","#E61245","#19BE2F","#C2C2C2"],
    },
  ],
}

const options = {
  layout:{
    padding:20,
  },

  scales:{
    x:{
      display:false,
      grid:{
        display:false,
        borderWidth:1,
        borderColor:'rgba(0,0,0,1)'
      },
    },
    y:{
      display:false,
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
      color:'#393939',
      backgroundColor:'#e2e2e2',
      borderRadius:3,
      anchor:'center',
      font:{
        size:11,
      },
    },
  },
}

</script>