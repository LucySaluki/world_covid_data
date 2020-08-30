<template>
  <div>
    <GChart id="country-item-selected"  :type="chartType" :data="selectcountry" :options="chartOptions"/>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "country-detail",
  props:['selectedCountry'],
  components: {
    GChart,
  },
  data () {
      return {
        chartOptions: {
        title: `Coronavirus Cases for ${this.selectedCountry.location}`,
        //legend:'none',
        //colors: ['#e15052'],
        height:350,
        width: 600
      },
      chartType:"BarChart"
      }
  },
    computed: { selectcountry: function() {
        if (this.selectedCountry) {
        return this.gatherCountryData(this.selectedCountry);
        } 
        return null
    }
    },
    methods: {
      gatherCountryData: function (scountry){
        const selectcountry= [["location", "confirmed","recovered","dead"]];
          const newselectcountry =[scountry.location, scountry.confirmed, scountry.recovered, scountry.dead];
          selectcountry.push(newselectcountry);
         return selectcountry;
      }
    }
    }

</script>

<style>

</style>