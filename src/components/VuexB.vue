<template>
  <div>
    <h1>vuex 局部命名空间</h1>
    <h2>{{myNum}}</h2>
  </div>
</template>

<script>
import { mapGetters,mapState,mapMutations, mapActions} from "vuex";

  export default {
    data() {
      return {
        // key: value
      }
    },
    computed: {
            ...mapState(["myNum"]),

      name() {
        // return this.data
      }
    },
    methods: {
      // name() {}
    }
  }
</script>

<style scoped>
  
</style>