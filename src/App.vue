<template>
    <div>
        <div class="header">
            <img alt src="@/assets/mo.jpg" />
            <div class="nav-menu">
                <div class="logo">LOGO</div>
                <navMenu></navMenu>
            </div>
        </div>
        <div class="main-body">
            <router-view />
        </div>
        <footerMenu></footerMenu>
    </div>
</template>
<script>
import navMenu from '@/components/navMenu.vue'
import footerMenu from '@/components/footer.vue'
export default {
    name: 'App',
    components: { navMenu, footerMenu },
    data() {
        return {}
    },
    mounted() {},
    computed: {},
    methods: {}
}
</script>

<style lang="less">
*,
html,
body {
    padding: 0;
    margin: 0;
}
.header {
    width: 100%;
    // min-height: 300px;
    background-color: #000;
    color: #fff;
    img {
        width: 100%;
    }
    .nav-menu {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        position: absolute;
        .logo {
            width: 15%;
            background-color: #fff;
            color: #000;
        }
        .el-menu {
            flex: 1;
            background-color: rgba(0, 0, 0, 0);
        }
    }
}
.main-body {
    min-height: 100px;
}
</style>
