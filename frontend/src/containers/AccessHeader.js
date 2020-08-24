import React from 'react';
import AccessButtons from '../containers/AccessButtons';
import LoggedUserMenu from '../components/LoggedUserMenu';

function AccessHeader(props) {
    const token = localStorage.getItem("token");
    if (!token) {
      return <AccessButtons />;
    }
    return <LoggedUserMenu />;
}

export default AccessHeader;