import { atom } from 'recoil'

export const addressesState = atom({
    key: 'addressBook',
    default: []
})

export const pageState = atom({
    key: 'pageState',
    default: 1
})
