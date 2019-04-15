
<template>

    <div class="app">

      <div class="box" v-for="Repo in Repos" :key="Repo">
  <article class="media">
    <div class="media-left">
      <figure class="image is-128x128">
        <img :src =Repo.owner.avatar_url value="avatar" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
          <a :href=Repo.html_url class="item has-text-dark">
            <strong>{{ Repo.name }}</strong>
          </a>
          <br>
          <br>
          <p> {{ Repo.description }} </p>
          <br>
          <a class="item-1 has-text-dark">
             <strong> Stars: </strong> {{ Repo.forks }}
          </a>
          <a class="item-2 has-text-dark"> 
            <strong> Issues: </strong> {{ Repo.open_issues_count }}
          </a>
      </div>
      
    </div>
  </article>
</div>
    </div>
</template>

<script>
// import axios from "axios"
//import navbar rom "/home/norlatex/CHARAFI/coding_challenge/src/components/navbar.vue"   
export default { 

data() {
    return {
      Repos:[],
    }
},
created() {
    this.GetData() 
},
methods: {
    
    async GetData() {
    try {
        const axios = require('axios')   
        let url = `https://api.github.com/search/repositories?q=created:>2019-03-06&sort=stars&order=desc`
        const { data } = await axios.get(url)
        this.Repos = data.items
        
        }
        catch(error) {
          console.log(error.message)
        } 
     },
  },
}

</script>
 <style scoped>
.item-2 {
margin: 30px;
};
 </style>

