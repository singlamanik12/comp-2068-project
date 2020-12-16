import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';
const Delete = (props) => {
  const { setNotification } = useContext(NotificationContext);
  const [redirect, setRedirect] = useState(false); 
  const { id } = props.match.params;
  useEffect(() => {
    
    Axios.post(`http://localhost:4000/blogs/destroy`, {
        _id:id
      })
    .then(() => {
        setNotification({
            type: "success",
            message: "This action was performed successfully."
          });
          setRedirect(true);
    }).catch((err)=>console.log(err.message))
  }, []);

  return (
    redirect ? (
        <Redirect to="/blogs"/>
    ) : null
  );
}
 
export default Delete;