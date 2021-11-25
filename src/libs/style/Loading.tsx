import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Loading = () => {
  return (
    <>
        <LoadingWrapper />
    </>
  );
}

export default Loading;

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
`

const LoadingWrapper = styled.div`
    margin: 5% auto;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top: 5px solid #000;
    animation: ${spin} 0.7s infinite linear;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`