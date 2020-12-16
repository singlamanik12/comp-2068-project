import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import BlogForm from '../BlogForm';

const New = () => {
  return (
    <>
      <Header title="Create Blog">
          <p>Create new blogs everyday.</p>
      </Header>
      
      <Container>
       

        <BlogForm endpoint="blogs"/>
      </Container>
    </>
  );
}
 
export default New;