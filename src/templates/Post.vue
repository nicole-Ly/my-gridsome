<template>
  <div>
    <h1>{{ $page.post.title }}</h1>
   <div>{{ $page.post.content }}</div>
  </div>
</template>
<page-query>
  query ($id:ID!) {
    post(id:$id){
      id,
      title,
      content,
      path
    }
  }
</page-query>

<script>
export default {
  name:'postPage',
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style>

</style>