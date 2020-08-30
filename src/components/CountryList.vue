<template>
  <div>
      <ul>
          <CountryListItem v-for="(country, index) in countries" :key="index" :country="country"/>
      </ul>
  </div>
</template>

<script>
import CountryListItem from '@/components/CountryListItem';

export default {
    name: "country-list",
    props:['countries'],
    components:{
        'country-list-item':CountryListItem
    }

}
</script>

<style>

</style>