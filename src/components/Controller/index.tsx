import React from "react";
import styled from "@emotion/styled";

const Controller = ({ onClickButton }) => {
    return(
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={() => onClickButton(-100)}>-100</Button>
                <Button onClick={() => onClickButton(-10)}>-10</Button>
                <Button onClick={() => onClickButton(-1)}>-1</Button>
                <Button onClick={() => onClickButton(1)}>+1</Button>
                <Button onClick={() => onClickButton(10)}>+10</Button>
                <Button onClick={() => onClickButton(100)}>+100</Button>
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

const ButtonWrapper = styled.div``

const Button = styled.button``