<template>
    <div class="app">
        
    </div>
</template>
<script>
// import axios from "axios"
import vue from "vue"
import navbar from '../components/navbar.vue';

 export default { 
     components: { navbar},
     data : () => {
         return {
             GithubArr: [],
         }
    },
    created() {
        this.GetData()
    },

    methods: {
        
        async GetData() {

           try{
               const axios = require('axios')
            let url = `https://api.github.com/search/repositories?q=created:>2019-03-06&sort=stars&order=desc`
            const RepoDAta = await axios.get(url)
            this.GithubArr.push(RepoDAta)
            console.log(this.GithubArr) 
            }
            catch(err){
                console.log(err.message)
            } 

            }
        }
    }

    
   

     
     
 
</script>
 <style scoped>
 
 </style>
 