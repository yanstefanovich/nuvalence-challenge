import React from 'react'

import { Headers } from '../'
import { StyledCard } from './styled'

const Card = ({ title, children, onClick, withHover, id }) => (
    <StyledCard id={id} withHover={withHover} onClick={onClick}>
        {title && <Headers._3>{title}</Headers._3>}
        {children}
    </StyledCard>
)

export default Card
