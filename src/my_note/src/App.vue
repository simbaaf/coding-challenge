<template>
<div class="app">
 <input type="text" name="note" v-model="notes" v-on:keyup.enter="saveNote">
 <p>{{ savednote  }}</p>
 </div>
</template>

<script>

export default {
  name: 'app',
  data: ()=> {
    return {
      notes: [],
      savednote:localStorage.getItem('note')
    }
  },
 
  methods:{
    saveNote() {
      localStorage.setItem('note', this.notes)
    }
  }
  
}
</script>

<style>

</style>
