
<template>
    <div class="app has-background-white-ter"  >
      <div class="box" v-for="Repo in Repos" :key="Repo.id">
  <article class="media">
    <div class="media-left">
      <figure class="image is-128x128">
        <img :src =Repo.owner.avatar_url
              value="avatar" 
              alt="the avatar of the user"
              title="The Avatar of the user"
              >
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
          <a  title="check more information about this repo"
              :href=Repo.html_url 
              class="item has-text-dark">
              <strong>{{ Repo.name }}</strong>
          </a>
          <br>
          <br>
          <p> <strong>description:</strong> {{ Repo.description }} </p>
          <br>
          <a 
              class="item-1 has-text-dark"
              title="Number of stars"
              >
              <strong> Stars: </strong>  {{ Repo.forks }}
          </a>
          <a class="item-2 has-text-dark"
              title="Number of issues"
          > 
             <strong> Issues: </strong>   {{ Repo.open_issues_count }}
          </a>
      </div>  
    </div>
   </article>
</div> 
<infinite-loading @infinite="GetData"></infinite-loading>
</div>      
</template>

<script>
import axios from "axios"
import InfiniteLoading from 'vue-infinite-loading';
export default {

components: {
    InfiniteLoading,
  },

data() {
    return {
      Repos:[],
      page: 0
    }
},
created() {
    this.GetData()
},
methods: {
  async GetData($state) {
    let url = `https://api.github.com/search/repositories?q=created:>2019-04-06&sort=stars&order=desc&page=${this.page}`
    const {data} = await axios.get(url, {
        params: {
          page: this.page++,
          order: "desc", 
          sort:"stars",
          q: "created:>2019-04-06"
        },
    })
    this.Repos.push(...data.items)
     $state.loaded();
   }
  }
}
  
</script>
 <style scoped>
.item-2 {
margin: 30px;
};
 </style>

