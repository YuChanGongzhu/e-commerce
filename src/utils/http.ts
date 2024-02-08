import { useMemberStore } from "@/stores"
import { resolve } from "path"

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net/'

//拦截器
const httpInterceptor = {
    invoke(options: UniApp.RequestOptions) {
        //地址
        if (!options.url.startsWith("http")) {
            options.url = baseUrl + options.url
        }
        //超时时间
        options.timeout = 10000
        //请求头
        options.header = {
            ...options.header,
            'source-client': "miniapp"
        }
        //token
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }

        // console.log("options:", options) //???
    }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
    code: string,
    msg: string,
    result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                }
                else if (res.statusCode === 401) {
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/login/login' })
                    reject(res)
                } else {
                    uni.showToast({
                        title: (res.data as Data<T>).msg || '请求错误',
                        icon: 'none',
                    })
                }
            },
            fail(err) {
                uni.showToast({
                    title: '网络错误，换个网络',
                    icon: 'none',
                })
                reject(err)
            }
        })
    })
}