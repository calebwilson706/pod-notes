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
        text-decoration: none;
        color: #698cff;
    }
    .textareaContainer {
        padding-top: 10px;
    }
    .titleOfPodnote {
        font-family: 'Staatliches', cursive;
        color: black;
        margin-bottom: 0;
    }
    .byCaleb, .linkToPodcast {
        font-family: 'Roboto', sans-serif;
    }

    .introText {
        font-family: 'Roboto', sans-serif;
    }
`   


export const SelectItemButton = styled.li`
    button {
        cursor: pointer;
        display: inline-block;
        width: 10vw;
        text-align: left;
        border-radius: 15px;
        border-style: none;
        color: black;
    }

    .navbarTitle {
        font-weight: bold;
        font-size: 0.9rem;
    }
    button p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: 'Roboto', sans-serif;
        font-size: 0.8rem;
        margin: 0;
    }

    button:disabled {
        background-color: #698cff;
        color: white;
    }
    
    .navBarText {
        padding: 5px 0px 5px 5px;
    }

`