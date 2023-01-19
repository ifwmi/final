<template>
  <div class="end">
    <h2 v-if="this.counterStore.rightL">Правильно:{{this.counterStore.rightL}}</h2>
    <h1 v-if="this.counterStore.rightL">{{this.counterStore.rightL}}0% от 100%</h1>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {useCounterStore} from "@/stores/counter";

export default {
  computed: {
    ...mapStores(useCounterStore)
  },

}
</script>