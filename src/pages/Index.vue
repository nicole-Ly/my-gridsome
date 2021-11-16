<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>Clean Blog</h1>
                        <span class="subheading">A Blog Theme by Start Bootstrap</span>
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
                <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
                     <g-link to="/posts/1">
                        <h2 class="post-title">{{edge.node.title}}</h2>
                    </g-link>
                    <p class="post-meta">
                       Posted by
                        <a href="#!">Start Bootstrap</a>
                        on September {{edge.node.created_at}}
                    </p>
                    <p class="post-meta">
                      {{edge.node.content}}
                    </p>
                    <p class="post-meta">
                      <a style="color:blue" href="" v-for="tag in edge.node.tags" :key="tag.id">{{tag.title}} &nbsp;</a>
                    </p>
                    <hr class="my-4" />
                </div>
                <Pager :info="$page.posts.pageInfo"/>
                <!-- Pager-->
                <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
            </div>
        </div>
    </div>
  </Layout>
</template>
  <page-query>
    query ($page: Int) {
      posts:allStrapiPost(perPage:2, page:$page) @paginate {
        pageInfo {
          totalPages
          currentPage
        }
        edges{
          node{
            id
            title
            content
            isPublish
            tags{
              id
              title
            }
            created_at
          }
        }
      }
    }
  </page-query>
<script>
import { Pager } from 'gridsome'

export default {
  name:'indexPage',
   components: {
    Pager
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
