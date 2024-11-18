import React from "react";
import styled from "@emotion/styled";

const Controller = ({ onClickButton, handleDelete }) => {
    return(
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={() => onClickButton(-100)}>-100</Button>
                <Button onClick={() => onClickButton(-10)}>-10</Button>
                <Button onClick={() => onClickButton(-1)}>-1</Button>
                <Button onClick={() => onClickButton(1)}>+1</Button>
                <Button onClick={() => onClickButton(10)}>+10</Button>
                <Button onClick={() => onClickButton(100)}>+100</Button>
                <DeleteButton onClick={() => handleDelete()}>Reset</DeleteButton>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Controller;

const Wrapper = styled.section`
    background-color: rgb(245, 245, 245);
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const Button = styled.button`
    margin: 1px;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`

const DeleteButton = styled.button`
    background-color: red;
    margin: 2px;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 100%;
    cursor: pointer;
`