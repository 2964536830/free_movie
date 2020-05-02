import Vue from "vue";
import Vuex from "vuex";
import WyApi from "@/api/music/wy/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicUrl: ""
  },
  mutations: {
    setMusicUrl(state, data) {
      state.musicUrl = data;
    }
  },
  actions: {
    setMusicUrl({ commit }, data) {
      commit("setMusicUrl", data);
    },
    getMusicUrl({ commit }, data) {
      WyApi.getMusicUrl(data).then(res => {
        let url = res.data[0].url;
        if (!url) {
          alert("这个歌曲暂时出了点问题哦");
          // url = `http://music.163.com/song/media/outer/url?id=${data}.mp3`;
          return;
        }
        commit("setMusicUrl", url);
      });
    },
    downloadMusic(id) {
      WyApi.getMusicUrl(id).then(res => {
        window.open(res.data[0].url);
      });
    }
  },
  modules: {}
});
