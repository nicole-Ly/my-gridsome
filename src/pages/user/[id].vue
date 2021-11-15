<template>
  <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{edge.node.title}}
    </div>
  </div>
</template>

<page-query>
  query{
    posts:allPost{
      edges{
        node{
          id
          title
          content
        }
      }
    }
  }
</page-query>

<style>

</style>