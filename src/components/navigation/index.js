import React from 'react'
import {
    StyledNavigation as Navigation,
    StyledLink as Link,
    StyledHeader as Header
} from './styled'

export default () => (
    <Navigation>
        <Header>Coding Challenge</Header>
        <div>
            <Link to='/'>Address Book</Link>
        </div>
    </Navigation>
)
