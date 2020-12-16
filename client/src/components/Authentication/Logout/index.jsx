import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../UserProvider';
import { NotificationContext } from '../../shared/Notifications';

const Logout = () => {
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);

  
  useEffect(() => {
   // Axios.post(`${globalStore.REACT_APP_ENDPOINT}/logout`, { secret_token: user.token })
   localStorage.clear() 
  
      setNotification({
        type: 'success',
        message: "You have successfully logged out."
      });
      
      setUser(null);
      

      setRedirect(true);
    
  });

  return (
    redirect ? (
      <Redirect to="/"/>
    ) : null
  );
}
 
export default Logout;