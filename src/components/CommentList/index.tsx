import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import challenge from '../../libs/api/challenge';
import CommentCard from './CommentCard';

interface Props {
  id: number
}

const CommentList:FC<Props> = ({id}) => {
    const [ commentData, setCommentData ] = useState([])
    useEffect(() => {
      challenge.getComment(id)
      .then((res) => {
        setCommentData(res.data.data.commentResponses)
        console.log(res.data.data.commentResponses)
      })
      .catch((err) => {
        console.log(err)
      })
    },[])

  return (
    <>
      <CommentListWrapper>
        {
          commentData.map((i:any, index: any) => {
            return (
              <CommentCard key={index} {...i}/>
            )
          })
        }
      </CommentListWrapper>
    </>
  );
}

export default CommentList;

const CommentListWrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 333px);
  @media screen and (max-width: 1600px) { 
      width: 1000px;
      grid-template-columns: repeat(3, 333px);
  }
`