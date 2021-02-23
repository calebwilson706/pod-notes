import styled, { createGlobalStyle } from 'styled-components';

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

    .linkToPodcast {
        padding-bottom: 10px;
    }
    .textareaContainer {
        padding-top: 10px;
    }
`

export const SelectItemButton = styled.li`
    button {
        width: 10vw;
        text-align: left;
    }

    button p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

`
