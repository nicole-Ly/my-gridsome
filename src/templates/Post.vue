<template>
  <Layout>
     <!-- Page Header-->
        <header class="masthead" :style="`background-image: url('${post.cover.url}')`">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{post.title}}</h1>
                            <h2 class="subheading">{{post.subTitle}}</h2>
                             <p class="post-meta">
                              Posted by
                                <a href="#!">Start Bootstrap</a>
                                on September {{post.created_at}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                       <p class="post-meta" v-html="transMark(post.content)"></p>
                    </div>
                </div>
            </div>
        </article>
  </Layout>
</template>
<page-query>
  query ($id:ID!) {
    post:strapiPost(id:$id){
      id
      title
      content
      cover{
        url
      }
      tags{
        id
        title
      }
      created_at
    }
  }
</page-query>

<script>
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
export default {
  name:'postPage',
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  computed:{
    post(){
      return this.$page.post;
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

</style>