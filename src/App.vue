<template>
  <div id= "app">
    <header-logo/>
    <h1>Worldwide Coronavirus Cases</h1>
    <google-chart :locations="locations"></google-chart>
    <CountryList :countries="countries"/>
  </div>
</template>

<script>
import WorldCovidChart from "@/components/WorldCovidChart.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import CountryList from "@/components/CountryList.vue";
import CountryDetail from "@/components/CountryDetail.vue";
import {eventBus} from "@/main.js"; 

export default {
  name:'App',
  data() {
    return {
      locations:[],
      countries:[]
    }
  },
  components: {
    "google-chart": WorldCovidChart,
    "header-logo":HeaderLogo,
    "country-list":CountryList,
    "country-detail":CountryDetail
  },
  mounted(){
      this.fetchLocations();
      this.fetchCountries();
    },
    methods: {
      fetchLocations: function(){
        fetch('https://www.trackcorona.live/api/cities')
        .then(reponse => reponse.json())
        .then(data => this.locations = this.gatherLocationData(data.data));
      },
      fetchCountries: function() {
        fetch('https://www.trackcorona.live/api/countries')
        .then(res => res.json())
        .then(countrydata => this.countries= countrydata.data);
      },
    gatherLocationData: function (locationAll) {
      const locations = [["Longitude", "Latitude"]];
      locationAll.forEach((location) => {
        const newLocation = [location.longitude, location.latitude];
        locations.push(newLocation);
      });
      return locations;
    },
      
    },
}
</script>

<style>
body{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color:#22282A;
  color: whitesmoke;
  margin: 10px;
}
</style>