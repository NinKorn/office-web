
<style lang="less">
</style>
<template>
    <div>
        <el-submenu :index="i.id" :key="i.id" v-for="i in children">
            <template slot="title">{{ title }}</template>
            <el-menu-item :index="item.id" :key="item.id" v-for="item in i.children">
                <router-link :to="i.path">{{i.name}}</router-link>
            </el-menu-item>
        </el-submenu>
    </div>
</template>
<script>
export default {
    name: 'item',
    props: ['children', 'title'],
    data() {
        return {}
    }
}
</script>

