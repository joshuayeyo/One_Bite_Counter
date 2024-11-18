
import styled from '@emotion/styled'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  }

  const handleDelete = () => {
    setCount(0);
  }

  return (
    <Wrapper>
      <Title>Simple Counter</Title>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} handleDelete={handleDelete} />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  font-family: pretendard;
  padding: 20px;
  margin: 0 auto;
  width: 400px;
`

const Title = styled.h1`
`