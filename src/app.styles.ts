import styled, { createGlobalStyle } from 'styled-components' ;

export const GlobalStyle = createGlobalStyle`
    .leftColumn, .rightColumn {
        text-align: left;
    }

    .leftColumn {
        ul {
            list-style: none;
        }
        float: left;
        width: 20%;
    }
    .rightColumn {
        text-align: left;
        float: right;
        width: 80%;   
    }

    .exitButton {
        color: red;
    }

`

export const CurrentItemWrapperStyles = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`
