import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../app.routes';
import SideMenuDrawer from './layout.side-menu-drawer';

class NavigationBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  useStyles = () => ({
    header: {
      color:'white'
    }
  });
  

  toggleDrawer = (open) => {
    this.setState({
      open
    })
  }

	render(){
    const classes = this.useStyles();
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              onClick = {()=>this.toggleDrawer(true)} 
              edge="start"
              color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Link to={AppRoutes.landing}>
              <Typography variant="h6" style= {classes.header} >
                Yogurt Kremódi
              </Typography>
            </Link>
          </Toolbar>
          
        </AppBar>
        <SideMenuDrawer
          open = {open}
          onClose = {this.toggleDrawer}
        />
      </div>
    );
	}
}

export default NavigationBar;



