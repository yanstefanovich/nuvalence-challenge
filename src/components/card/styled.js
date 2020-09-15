import styled from 'styled-components'

export const StyledCard = styled.div`
    border-radius: 3px;
    box-shadow: 0.5px -0.5px 2px LightBlue;
    font-family: Lato, sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    margin: 0 0 0.75rem 0;
    padding: 1.25rem 1.75rem;

    ${({ withHover }) =>
        withHover &&
        `&:hover {
          border: 1px solid black;
          cursor: pointer;
        }`}
`
