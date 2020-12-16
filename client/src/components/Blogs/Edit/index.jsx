import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import BlogForm from '../BlogForm';

const Edit = (props) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const { id } = props.match.params;
  useEffect(() => {
    
    Axios.get(`http://localhost:4000/blogs/${id}`)
    .then(({ data }) => {
      setBlogDetails(data);
    });
  }, []);

  return (
    blogDetails ? (
      <>
        <Header title="Edit Blog"/>
        
        <Container>
         
          <BlogForm
            preloadData={ blogDetails }
            endpoint="blogs/update"
            buttonLabel="Update"
          />
        </Container>
      </>
    ) : null
  );
}
 
export default Edit;