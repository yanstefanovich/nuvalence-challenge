import React from 'react'
import { useRecoilValue } from 'recoil'
import { useParams, useNavigate } from '@reach/router'

import { addressesState } from '../../state'
import { Card, Wrapper } from '../../components'

export default () => {
    const navigate = useNavigate()
    const params = useParams()
    const addressBook = useRecoilValue(addressesState)
    const details = addressBook[params.id]

    const goBack = () => navigate(`/#${params.id}`)

    return (
        <Wrapper>
            <button onClick={goBack}>Go Back</button>
            <Card
                title={`${Number(params.id) + 1}. ${details.name.title} ${
                    details.name.first
                } ${details.name.last}`}
            >
                <p>Email: {details.email}</p>
                <p>Phone: {details.phone}</p>
            </Card>
        </Wrapper>
    )
}
