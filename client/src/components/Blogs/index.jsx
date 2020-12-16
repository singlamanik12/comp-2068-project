import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';
import { Container} from 'react-bootstrap';
import { UserContext } from '../Authentication/UserProvider';
import Header from '../shared/Header';
import {Link} from "react-router-dom"
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
const Blogs = () => {
  const { globalStore } = useContext(GlobalStoreContext);
  const [blogs, setBlogs] = useState([]);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    Axios.get(`http://localhost:4000/blogs`)
    .then(({ data }) => setBlogs(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
        type: "danger",
        message: "Couldn't access the blogs at this time."
      });
    });
  }, [globalStore, setNotification]);

  return (

      <>
        <Header title="Blogs">
        <p>Create new blogs everyday.</p>
        </Header>

        <Container className="my-3">
          
        {user ? (<Link to={`create_blog`} style={{textDecoration:"none"}}><Button  variant="contained" color="primary">Create Blog</Button></Link>
        ):   (<Alert severity="info">
        <AlertTitle>Information</AlertTitle>
        Login to create or edit blog — <strong>Click on login!</strong>
      </Alert>)}
              {blogs.map(({_id,heading, blog,createdAt}, i) => (
              <Paper style={{padding:"20px",margin:"20px",backgroundColor:"yellow"}} >
                  <h3><pre>{heading}</pre></h3>
                  <small><strong>Created on - </strong>{new Date(createdAt).toDateString()}</small>
                  <pre>{blog}</pre>
                  {user && <p><Link to={`blog/edit/${_id}`} style={{textDecoration:"none"}}><Button  variant="contained" color="primary">Update</Button></Link>  <Link to={`blog/delete/${_id}`} style={{textDecoration:"none",marginLeft:"10px"}}><Button  variant="contained" color="secondary">Delete</Button></Link></p>}
              
                  </Paper>))}
          
        
        </Container>
      </>
    
  );
}
 
export default Blogs;