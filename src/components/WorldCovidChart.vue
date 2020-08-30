<template>
  <div>
    <GChart id="world-covid-chart"  :type="chartType" :data="locations" :options="chartOptions"/>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "google-chart",
  components: {
    GChart,
  },
  data () {
      return {
        chartOptions: {
        title: 'World Confirmed Coronavirus Cases: Cities Affected',
        legend:'none',
        colors: ['#e15052'],
        pointShape: {type:'square'},
        height:700,
        width: 1200
      },
      chartType:"ScatterChart"
      }
    },
  props: ['locations']
}
</script>

<style>

</style>