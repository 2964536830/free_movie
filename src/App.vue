<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <router-link class="color-white" to="/video">小爱视频解析</router-link>
            </div>
            <div class="d-flex align-center ml-5">
                <router-link class="color-white" to="/music">小爱音乐</router-link>
            </div>

            <v-spacer></v-spacer>

            <v-btn target="_blank" text>
                <span class="mr-2">更多操作</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer absolute class="font-weight-medium" height="50">
            <v-col class="text-center" cols="12">站长QQ:2964536830(注明来意) &nbsp;&nbsp;本网站资源为网络收集所得,一切资源仅为学习交流娱乐所用,请勿用于商业用途
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
    import {mapState} from "vuex"

    export default {
        name: "App",

        data: () => ({
            //
        }),
        computed: {},
        methods: {}
    };
</script>
<style lang="less"></style>
