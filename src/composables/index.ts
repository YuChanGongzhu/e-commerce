import type { XtxGuessInstance } from "@/types/component"
import { ref } from "vue"
//组合式函数
export const useGuessList = () => {
    const guessRef = ref<XtxGuessInstance>()
    const onScrolltolower = () => {
        guessRef.value?.getMore()
        // console.log('猜猜')
    }
    return {
        guessRef,
        onScrolltolower
    }
}