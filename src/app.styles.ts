import styled, { createGlobalStyle } from 'styled-components';



//main screen columns
export const GlobalStyle = createGlobalStyle`
    
    .leftColumn, .rightColumn {
        text-align: left;
    }

    .leftColumn {
        float: left;
        width: 20%;
    }
    .rightColumn {
        text-align: left;
        float: right;
        width: 80%;   
    }
`

//current pod not info styling
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
//nav bar list styling
export const NavigationUnorderdList = styled.ul`
    list-style: none;
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

    button:hover {
        background-color: #cad1eb;
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
        cursor: default;
    }
    
    .navBarText {
        padding: 5px 0px 5px 5px;
    }

`


export const NewNoteButton = styled.button`
    font-family: 'Staatliches', cursive;
    font-size: 1.2rem;
    margin: 0;
    background-color: #98f58c;
    border-style: none;
    color: black;
    width: 10vw;
    border-radius: 10px;
    

    :hover{ 
        cursor: pointer;
        color: gray;
        background-color: #b6dbb2;
    }
`

//form styling

export const NewNoteFormWrapper = styled.form`
    text-align: center;
`





export const FormButtonContainer = styled.div`
    
    button { //all buttons
        font-family: 'Roboto' sans-serif;
        font-size: 1.3rem;
        border-style: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .submitButton {
        background-color: #1d9148;
        color: white;

        :hover {
            background-color: #63bf86;
        }
    }

    .exitButton {
        background-color: #c41831;
        color: white;

        :hover {
            background-color: #de6274;
        }
    }

    .clearButton {
        background-color:  #698cff;
        color: white;

        :hover {
            background-color: #c0cefc;
        }
    }
`

export const FormTextFieldsContainer = styled.div`
    margin-top: 4vh;
    margin-bottom: 2vh;
    
    .textField {
        padding:  2.5px 10px 2.5px 10px;
        width: 25vw;
        font-family: 'Roboto' sans-serif;
        font-size: 1.3rem;
        border-style: none;
        border-radius: 5px;
        background-color: #dce1e6;
    }
`