<template>
  <div class="home">
    <p>首页</p>
    <h2 style="color:red">query传参与params传参的区别：</h2>
    <h3 style="color:red">query传参：参数会出现在地址栏,刷新页面数据不会消失<br>
        params传参：参数会出现在地址栏，刷新页面数据会消失
    </h3>
    <div class="path">
      <p style="color:red">这里是通过path--->query的方式传参</p>
      <!-- 1、声明式导航 -->
      <!-- 普通的路由方式 -->
      <router-link to="/about">声明式跳转到关于页</router-link><br />
      <!-- 声明式导航传参 -->
      <router-link :to="{ path: '/about', query: { aa: mm } }">通过声明式导航传参</router-link>

      <hr />

      <!-- 2、编程式导航 -->
      <!-- 在methods中写一个路由的方法 -->
      <button @click="fn">编程式导航通过点击跳转到关于页</button>
      <!-- 或者可以直接在@click里写路由 -->
      <button @click="$router.push('/about')">
        编程式导航直接在@click里路由
      </button>
      <!-- 路径加query方式传数据（abc自己取的传入值的名称） -->
      <button @click="$router.push({ path: '/about', query: { abc: msg } })">
        编程式导航通过路径传值（query）
      </button>
    </div>

    <div class="name">
      <p style="color:red">这里是通过name--->params的方式传参</p>
      <router-link :to="{ name: 'A', params: { pp: pp } }">通过声明式导航传参(params)</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      mm: "我是通过声明式导航传入的值",
      msg: "我是通过编程式导航传入的值",
      pp:"我是通过声明式导航params方式传入的值"
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    fn() {
      this.$router.push("/about");
    },
  },
};
</script>
<style lang="less" scoped>
.home{
  .path{
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
  .name{
    width: 100%;
    height: 100%;
    border: 1px solid black;
    margin-top: 50px;
  }
}
</style>