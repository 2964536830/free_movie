<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">爱死机视频解析</div>
      <v-spacer></v-spacer>

      <v-btn target="_blank" text>
        <span class="mr-2">更多操作</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="less">
</style>
