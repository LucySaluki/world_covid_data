<template>
  <li v-on:click="handleClick">{{country.location}}</li>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
    name: 'country-list-item',
    props:['country'],
    methods:{
        handleClick() {
            eventBus.$emit('country-selected', this.country);
        }
    }

}
</script>

<style>

</style>