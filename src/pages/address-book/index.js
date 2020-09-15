import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { useNavigate } from '@reach/router'

import { pageState, addressesState } from '../../state'
import { getAddressBook } from '../../queries'
import { Card, Wrapper } from '../../components'

export default () => {
    const navigate = useNavigate()
    const [page, setPage] = useRecoilState(pageState)
    const [adressBook, setAddressBook] = useRecoilState(addressesState)
    const { isLoading, isError, data, error } = useQuery(
        ['address-book', page],
        getAddressBook
    )

    console.log(page)

    useEffect(() => {
        const start = page * 50 - 50
        if (data && data.data && data.data.results)
            setAddressBook((prevAdressBook) => {
                if (page === 1) return data.data.results
                if (prevAdressBook.length <= start) {
                    console.log('append', prevAdressBook.length, start)
                    return [...prevAdressBook, ...data.data.results]
                }
                const newAddressBook = [...prevAdressBook]
                newAddressBook.splice(start, 50, ...data.data.results)
                return newAddressBook
            })
    }, [data])

    const loadMore = () => setPage((prevPage) => prevPage + 1)
    const goTo = (index) => () => navigate(`/person/${index}`)

    if (isError) return error.message
    if (adressBook.length === 0 && isLoading) return 'Loading...'

    return (
        <Wrapper>
            {adressBook.map((r, index) => (
                <Card
                    key={r.email}
                    id={index}
                    withHover
                    onClick={goTo(index)}
                    title={`${index + 1}. ${r.name.title} ${r.name.first} ${
                        r.name.last
                    }`}
                />
            ))}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <button onClick={loadMore}>Load More</button>
            )}
        </Wrapper>
    )
}
