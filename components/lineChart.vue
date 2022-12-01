<template>
  <Line :chart-data="data" :chart-options="options" :height="height" />
</template>

<script lang="ts" setup>
import {Chart, registerables} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {Line} from 'vue-chartjs'

Chart.register(...registerables, ChartDataLabels);

const props = defineProps<{
  data: TChartData<'bar', number[], unknown>,
  options:TChartOptions<'bar'>,
  height:number
}>()

</script>