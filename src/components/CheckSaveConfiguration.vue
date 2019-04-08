<template>
 <div>
  <label>
  Do you wish to save?
    <input
      type='checkbox'
      v-model="save"
    />
  </label>
 </div>

</template>

<script>
export default {
  computed: {
    save: {
      get(){
        return this.$store.getters.getSaveStatus;
      },
      set(){
        this.$store.dispatch('toggleSaveOption')
      }
    },
  },
  watch: {
    save(){
      if(this.save){
        localStorage.setItem('shouldLoadSettings', true);
      }else{
        localStorage.setItem('shouldLoadSettings', false);
          }
        }
      }
}
</script>

<style>

</style>
