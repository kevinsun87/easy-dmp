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
import { post } from '@/http/request'
import type { BaseResponse } from '@/http/request'
import axios from 'axios'
let count = ref(1)
const init = useInitStore()
init.a++

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

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
interface ILoginRequest {
  username: string
  password: string
}

interface ILoginResponse {
  username: string
  roles: string[]
  accessToken: string
}

post<BaseResponse<ILoginResponse>, ILoginRequest>('/mock/api/user', data, {
  cancelToken: source.token
}).then((res) => {
  console.log(res, res.data, '123')
})

// source.cancel('Operation canceled by the user.');
// setTimeout(() => {
//   source.cancel('Operation canceled by the user.');
// }, 8000)



</script>
