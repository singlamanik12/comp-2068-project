import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import BlogRoutes from '../../Blogs/routes'
const Routes = () => {
  return (
    <>
      <BlogRoutes/>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;