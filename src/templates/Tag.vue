<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" >
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>{{tag.title}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <!-- Post preview-->
                <div class="post-preview" v-for="post in tag.posts" :key="post.id">
                     <h2 class="post-title">{{post.title}}</h2>
                    <p class="post-meta">
                       Posted by
                        <a href="#!">Start Bootstrap</a>
                        on September {{post.created_at}}
                    </p>
                    <p class="post-meta" v-html="transMark(post.content)">
                    </p>
                    <hr class="my-4" />
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>
  <page-query>
    query ($id: Int) {
      tag:strapiTag(id:$id){
      id
      title
      posts{
        id
        title
        content
        created_at
      }
    }
  }
  </page-query>
<script>
import { Pager } from 'gridsome'
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
export default {
  name:'indexPage',
   components: {
    Pager
  },
  computed:{
    tag(){
      return this.$page.tag
    }
  },
  methods:{
    transMark(content){
      const res = md.render(content);
      return res;
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
