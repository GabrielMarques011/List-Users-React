import styled from "styled-components";

export const ButtonContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 50%;
        margin-top: 20px;
        border-radius: 5px;
        padding: 15px;
        background-color: #44699d;
        border: none;
        transition: all 0.4s;
        color: #white;
    }

    button:hover{
        background-color: #243553;
        cursor: pointer;
        color: white;
    }

`