import React from 'react';
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Redirect } from 'react-router-dom';

const BlogForm = ({ endpoint, preloadData = {}, buttonLabel }) => {
  const { globalStore } = useContext(GlobalStoreContext);    

  const { setNotification } = useContext(NotificationContext);

  const [inputs, setInputs] = useState({
    ...preloadData,
  });
  const [redirect, setRedirect] = useState(false);
  
  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (inputs && inputs.blog) {
      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
        ...inputs,
      })
      .then(({ data }) => {
        setNotification({
          type: "success",
          message: "This action was performed successfully."
        });

        setRedirect(true);
      })
      .catch(error => {
        console.error(error.message);

        setNotification({
          type: "danger",
          message: `There was an issue performing this action: ${error.message}`
        });
      });
    }
  };

  return (
    redirect ? (
      <Redirect to="/blogs"/>
    ) : (
      <Form onSubmit={handleSubmit}>
        <p>
          The content is editable under <strong>/src/components/Users/UserForm/index.jsx</strong>
        </p>

        <Form.Group>
          <Form.Label>Heading</Form.Label>
          <Form.Control
            name="heading"
            onChange={handleChange}
            required
            defaultValue={inputs.heading}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Blog</Form.Label>
          <Form.Control as="textarea"
            name="blog"
            onChange={handleChange}
            required
            rows="6"
            defaultValue={inputs.blog}
          />
        </Form.Group>
 
  
        <Form.Group>
          <Button type="submit">{ buttonLabel || "Create" }</Button>
        </Form.Group>
      </Form>
    )
  );
}
 
export default BlogForm;