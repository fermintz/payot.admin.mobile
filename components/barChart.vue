<template>
  <Bar :chart-data="props.data" :chart-options="props.options" :height="props.height"/>
</template>

<script lang="ts" setup>
import {Chart, registerables} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {Bar} from 'vue-chartjs'
import { TChartData, TChartOptions } from 'vue-chartjs/dist/types';

Chart.register(...registerables, ChartDataLabels);

const props = defineProps<{
  data: TChartData<'bar', number[], unknown>,
  options:TChartOptions<'bar'>,
  height:number
}>()


</script>