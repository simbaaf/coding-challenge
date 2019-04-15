
<template>
    <div class="app">
        <button :@click='GetData()'>GetData</button>
        <ul v-for='Repo in Repos ' :key="Repo.name"> <strong> {{ Repo.name }} </strong> </ul>
          <li class="description">  {{ Repo.forks }} </li>

    </div>
</template>
<script>
// import axios from "axios"
import vue from "vue"
import navbar from '../components/navbar.vue';
export default { 
components: { navbar},
el: '#app',
data() {
    return {
      Repos:[],
      id:''
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
        const RepoData = await axios.get(url)
       // this.Repos = RepoData.data
        this.Repos.push(RepoDAta)
        // console.log(this.Repos) 
        }
        catch(err) {
            console.log(err.message)
        } 

    }
}
}

</script>
 <style scoped>
 
 </style>

