import type { AddressParams } from "@/types/address"
import type { AddressItem } from "@/types/address"
import { http } from "@/utils/http"

export const postMemberAddressAPI = (data: AddressParams) => {
    return http({
        method: 'POST',
        url: '/member/address',
        data
    })
}

export const getMemberAddressAPI = () => {
    return http<AddressItem[]>({
        method: 'GET',
        url: '/member/address'
    })
}

export const getMemberAddressIdAPI = (data: string) => {
    return http<AddressItem>({
        method: 'GET',
        url: `/member/address/${data}`
    })
}

export const putMemberAddressAPI = (id: string, data: AddressParams) => {
    return http({
        method: 'PUT',
        url: `/member/address/${id}`,
        data
    })
}

export const deleteMemberAddressAPI = (id: string) => {
    return http({
        method: 'DELETE',
        url: `/member/address/${id}`,
    })
}