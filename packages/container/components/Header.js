import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function Header() {
  
  return (
    <React.Fragment>
      <div>
        <Link to="/">Container App </Link>
        <button>Login</button>
      </div>
    </React.Fragment>
  );
}
