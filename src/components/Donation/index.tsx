import React from 'react';
import styled from '@emotion/styled';
import DonationCard from './DonationCard';

const Donation = () => {
  return (
    <>
        <DonationWrapper>
            <DonationList>
            {
                Array(11).fill(-1).map((_, index: number)=> {
                    return (
                        <DonationCard/>
                    )
                })
            }
            </DonationList>
        </DonationWrapper>
    </>
  );
}

export default Donation;

const DonationWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`

const DonationList = styled.div`
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