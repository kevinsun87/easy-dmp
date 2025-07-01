import { defineStore } from "pinia"
import type { IMessageInfo } from './types'
export const useInitStore = defineStore('init', {
    state: () => ({
        a: 1,
        b: 3,
        messageList: [] as IMessageInfo[]
    }),
    getters: {},
    actions: {
        init_data() {
            console.log('init_data---ajax')
        }
    }
})
