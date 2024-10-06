import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} location={location} navigate={navigate} params={params} />;
  };
};

export default withRouter;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Login from '../../container/login/login';// Adjust the import path as necessary

// const LoginWrapper = (props) => {
//     const navigate = useNavigate();
//     return <Login {...props} navigate={navigate} />;
// };

// export default LoginWrapper;
