
<style lang="less">
</style>
<template>
    <!-- <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item :index="i.id" :key="i.id" v-for="i in menu">
                <router-link :to="i.path">{{i.name}}</router-link>
            </el-menu-item>
            <item :children="i.children" :index="i.id" :key="i.id" :title="i.name" v-for="i in itemMenu"></item>
    </el-menu>-->

    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="0">
            <router-link to="/">首页</router-link>
        </el-menu-item>

        <el-submenu index="1">
            <template slot="title">产品中心</template>
            <el-menu-item index="1-1">
                <router-link to="/store">数字商店</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
                <router-link to="/cloudCode">云码</router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
import item from '@/components/item.vue'
export default {
    name: 'navMenu',
    data() {
        return {
            list: [
                {
                    id: '0',
                    name: '首页',
                    path: '/'
                },
                {
                    id: '1',
                    name: '产品中心',
                    path: '/productCenter',
                    children: [
                        {
                            id: '1-1',
                            name: '数字商店',
                            path: '/productCenter/store'
                        },
                        {
                            id: '1-2',
                            name: '云码',
                            name: '/productCenter/cloudCenter'
                        }
                    ]
                }
            ]
        }
    },
    methods: {},
    computed: {
        itemMenu: function() {
            let data = this.list.filter(i => {
                i.children
            })
            return data
        },
        menu: function() {
            let data = this.list.filter(i => {
                !i.children
            })
            return data
        }
    }
}
</script>

