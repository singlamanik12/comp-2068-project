import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './index';
 import New from './New';
 import Edit from './Edit';
import Delete from './Delete';


const Routes = () => {
  
  return (
    <Switch>
          <Route exact path="/blog/edit/:id" component={Edit}/>
          <Route exact path="/blog/delete/:id" component={Delete}/>
          <Route exact path="/blogs" component={Index}/>
          <Route exact path="/create_blog" component={New}/>
    </Switch>
  );
}
 
export default Routes;