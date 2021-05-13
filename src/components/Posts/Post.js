import React from 'react';
import PostHeader from './PostHeader';
import PostDetails from './PostDetails';
import styled from 'styled-components';

const StyledPost = styled.div`
    padding: 2.5%;
`


const Post = (props) => {
const { data } = props;
return (
    <StyledPost>
        <PostHeader title={data.title} image={data.url}/>
        <PostDetails date={data.date} explanation={data.explanation}/>
    </StyledPost>
 )
}

export default Post;