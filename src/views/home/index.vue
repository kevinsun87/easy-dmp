<template>
    <div>
        Home
        <el-button @click="openMessage">按钮</el-button>
        {{ count }}
        <el-icon size="30" color="red">
          <icon-ep-plus />
        </el-icon>
        <el-icon><icon-ep-document-add /></el-icon>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useInitStore } from '@/store/init/index'
import $http from '@/http/request'
let count = ref(1)
const init = useInitStore()
init.a++

setTimeout(() => {
    init.$patch({
        a: 11
    })
}, 2000)

init.$subscribe((mutation, state) => {
    console.log(mutation, state)
})

console.log(import.meta.env.VITE_PUBLIC_KEY, import.meta.url)
const openMessage = () => {
  ElMessage({
    message: 'This is a message.',
    grouping: true,
    type: 'success',
  })
}
const data = { username: 'admin', password: 'admin'}
$http.post('/mock/api/user', data).then((res) => {
  console.log(res, res.data)
}) 

</script>