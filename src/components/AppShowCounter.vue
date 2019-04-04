<template>
  <div>
    {{ getCounter }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'getCounter'
  ])
}
</script>

