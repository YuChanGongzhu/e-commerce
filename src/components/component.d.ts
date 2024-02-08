import XtxSwiper from './XtxSwiper.vue'
import XtxGuess from './XtxGuess.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponent {
        XtxSwiper: typeof XtxSwiper
        XtxGuess: typeof XtxGuess
    }
}



