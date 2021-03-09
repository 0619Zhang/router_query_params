<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- path——>query方式接收参数 -->
    <!-- 通过$route.query.名称的方式接受传入的数据（注：这里是$route） -->
    <mark>{{$route.query.aa}}</mark>
    <mark>{{$route.query.abc}}</mark>

    <!-- name——>params方式接收参数 -->
    <mark>{{$route.params.pp}}</mark>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.$route);
  }
}
</script>