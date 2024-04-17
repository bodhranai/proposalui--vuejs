<template>
  <ProposalList/>
</template>

<script>
import ProposalList from './components/ProposalList.vue'

export default {
  name: 'App',
  components: {
    ProposalList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>