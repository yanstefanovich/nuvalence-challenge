import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import { RecoilRoot } from 'recoil'

import { Navigation } from './components'
import { PersonDetails, AddressBook } from './pages'

export default () => (
    <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <Router>
                <AddressBook path='/' />
                <PersonDetails path='/person/:id' />
            </Router>
        </Suspense>
    </RecoilRoot>
)
