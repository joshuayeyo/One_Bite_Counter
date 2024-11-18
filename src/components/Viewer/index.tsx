import React, { useState } from "react";
import styled from "@emotion/styled";

const Viewer = ({ count }) => {

    return (
        <Wrapper>
            <Current>
                <Title> 현재 카운트: </Title>
                <Number> {count} </Number>
            </Current>
        </Wrapper>
    )
}

export default Viewer;

const Wrapper = styled.div`
    background-color: rgb(245, 245, 245);
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
`

const Current = styled.div`

`

const Title = styled.span``

const Number = styled.h1`

`