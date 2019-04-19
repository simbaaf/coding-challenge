
<template>
    <div class="app">
      <div class="box"
           v-for="Repo in Repos" 
           :key="Repo.id">

  <article class="media">
    <div class="media-left">
      <figure class="image is-128x128">
        <img :src =Repo.owner.avatar_url
             value="avatar" 
             alt="the avatar of user">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
          <a 
              :href=Repo.html_url 
              class="item has-text-dark">
              <strong>{{ Repo.name }}</strong>
          </a>
          <br>
          <br>
          <p> {{ Repo.description }} </p>
          <br>
          <a 
              class="item-1 has-text-dark ">
              <strong> Stars: </strong>  {{ Repo.forks }}
          </a>
          <a class="item-2 has-text-dark"> 
             <strong> Issues: </strong>   {{ Repo.open_issues_count }}
          </a>
      </div>  
    </div>
   </article>
</div> 
    </div>
</template>

<script>
import axios from "axios"
export default { 
data() {
    return {
      Repos:[],
      page: 1
    }
},
created() {
    this.GetData()
    this.loadMore()
},
methods: { 
  async GetData() {
        let url = `https://api.github.com/search/repositories?q=created:>2019-04-06&sort=stars&order=desc&page=${this.page}`
        const { data } = await axios.get(url)
        this.Repos = data.items
        },
  loadMore() {
       window.addEventListener('scroll', () => {
         if ((window.innerHeight + window.scrollY) >= document.body.innerHeight) {
           this.page += 1;
         }
       })
     } 
    }   
  }
</script>
 <style scoped>
.item-2 {
margin: 30px;
};
 </style>

