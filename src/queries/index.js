import axios from 'axios'

export const getAddressBook = async (_, page = 1) =>
    axios(
        `https://randomuser.me/api/?seed=nuvalence-challenge&page=${page}&results=50`
    )
