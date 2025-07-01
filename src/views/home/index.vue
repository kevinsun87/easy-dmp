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
import { useInitStore } from '@/store/init/index'
import { ref } from 'vue'
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
</script>