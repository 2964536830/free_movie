<template>
  <div class="home">
    <div class="home-bg"></div>
    <div class="search-bar">
      <div class="wrapper">
        <v-row>
          <v-col cols="8" md="8">
            <v-text-field background-color label="视频链接" v-model="urlValue" outlined dense></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-select class="pt-0" v-model="select" :items="items" label="解析源"></v-select>
          </v-col>
          <v-col cols="2">
            <v-btn color="deep-purple accent-4" depressed class="color-white" @click="parse">解析链接</v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="wrapper">
      <div class="movie-content">
        <template v-if='iframe.show'>
          <iframe :src="iframe.url" frameborder="0">
          </iframe>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import PARSE_URL from "../core/config"
export default {
  data: () => ({
    urlValue: "",
    iframe: {
      show: false,
      url: ""
    },
    select: PARSE_URL[0].value,
    items: PARSE_URL,
    lazy: false,
  }),

  methods: {
    parse () {
      this.iframe.show = true
      this.iframe.url = this.select + this.urlValue
    }
  },
}
</script>