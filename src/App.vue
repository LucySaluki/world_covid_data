<template>
  <div id= "app">
    <header-logo/>
    <h1>Worldwide Coronavirus Cases</h1>
    <google-chart :locations="locations"></google-chart>
    <label for="country_select">Select a Country:</label>
    <select id="country_select" v-model="selectedCountry">
      <option disabled value="">Select a country</option>
      <option v-for="(country, index) in countries" :key="index" :value="country">{{country.location}}</option>
    </select>
    <country-detail v-if="selectedCountry" :selectedCountry="selectedCountry"/>
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
      countries:[], 
      selectedCountry:null
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
      eventBus.$on('selectedCountry', country => this.selectedCountry = country);
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
      gatherCountryData: function (countriesAll){
        const countries= [["location", "confirmed","recovered","dead"]];
        countriesAll.forEach((country)=> {
          const newCountry =[country.location, country.confirmed, country.recovered, country.dead];
          countries.push(newCountry);
        }); return countries;
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