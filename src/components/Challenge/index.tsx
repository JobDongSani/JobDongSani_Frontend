import React from 'react';
import styled from '@emotion/styled';
import ChallengeCard from './ChallengeCard';

const Challenge = () => {
  return (
    <>
        <ChallengeWrapper>
            <ChallengeList>
            {
                Array(11).fill(-1).map((_, index: number)=> {
                    return (
                        <ChallengeCard/>
                    )
                })
            }
            </ChallengeList>
        </ChallengeWrapper>
    </>
  );
}

export default Challenge;

const ChallengeWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`

const ChallengeList = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 333px);
    @media screen and (max-width: 1600px) { 
        width: 1000px;
        grid-template-columns: repeat(3, 333px);
    }
    @media screen and (max-width: 1340px) { 
        width: 1000px;
        grid-template-columns: repeat(3, 333px);
    }
`