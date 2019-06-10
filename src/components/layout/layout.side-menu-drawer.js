import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Inbox , Mail, ExitToApp, AccountCircle, History, Home, ShoppingBasket, MonetizationOn, CalendarToday, List as ProductList, Info } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {AppRoutes} from '../../app.routes';
// import {singOut} from '../../api/user.service';
import { fecthUser, singout } from '../../actions/action.user';
import { isSignedin, isAdmin } from '../../actions/utils'
import { connect } from 'react-redux';

class SideMenuDrawer extends Component {

	onClose = (open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
		}
		return this.props.onClose && this.props.onClose(open);
  }
  
  singout = () => this.props.singout();

  renderUserInfo = ({user}) => {
    if (!isSignedin({user})){
      return;
    }

    return (
      <ListItem button component={Link} to={AppRoutes.profile}>  
        <ListItemIcon>
          <Avatar src={user.photoURL} />
        </ListItemIcon>
        <ListItemText primary= {user.displayName} />
      </ListItem>
    )
  }


	sideList = ({classes, user}) => (
		<div
      className={classes.list}
      role="presentation"
      onClick={this.onClose(false)}
      onKeyDown={this.onClose(false)}
    >
          
      <List>
        {isSignedin({user}) && this.renderUserInfo({user})}
        {!isSignedin({user}) && (
          <ListItem button component={Link} to={AppRoutes.signIn}>  
            <ListItemIcon><AccountCircle/></ListItemIcon>
            <ListItemText primary='Iniciar sesión' />
          </ListItem>
        )}
        <ListItem button component={Link} to={AppRoutes.landing}>  
          <ListItemIcon><Home/></ListItemIcon>
          <ListItemText primary='Inicio' />
        </ListItem>
      </List>
      <Divider />
      {isSignedin({user}) && (
        <List>
          <ListItem button component={Link} to={AppRoutes.shop}>
              <ListItemIcon><ShoppingBasket /></ListItemIcon>
              <ListItemText primary='Hacer pedido' />
          </ListItem>
          <ListItem button component={Link} to={AppRoutes.purcharses}>
              <ListItemIcon><History /></ListItemIcon>
              <ListItemText primary='Historial de pedidos' />
          </ListItem>
          <ListItem button onClick= {this.singout} >  
              <ListItemIcon><ExitToApp/></ListItemIcon>
              <ListItemText primary='Cerrar sesión' />
          </ListItem>
          <Divider />
        </List>
      )}
      {isAdmin({user}) && (
        <List>
          <ListItem button component={Link} to={AppRoutes.products}>
              <ListItemIcon><ProductList /></ListItemIcon>
              <ListItemText primary='Productos' />
          </ListItem>
          <ListItem button component={Link} to={AppRoutes.orders}>
              <ListItemIcon><MonetizationOn /></ListItemIcon>
              <ListItemText primary='Pedidos' />
          </ListItem>
          <ListItem button component={Link} to={AppRoutes.openShop}>
              <ListItemIcon><CalendarToday /></ListItemIcon>
              <ListItemText primary='Apertura de pedidos' />
          </ListItem>
          <Divider/>
        </List>
      )}
      <List>
        <ListItem button component={Link} to={AppRoutes.about}>
            <ListItemIcon><Info /></ListItemIcon>
            <ListItemText primary='Acerca de nosotros' />
        </ListItem>
        <ListItem button component={Link} to={AppRoutes.contact}>
            <ListItemIcon><Mail /></ListItemIcon>
            <ListItemText primary='Contacto' />
        </ListItem>
      </List>
    </div>
  );
  
	render(){
		const classes = this.useStyles();
		const {open = false, user} = this.props;

		return (
			<Drawer open={open} onClose={this.onClose(false)}>
				{this.sideList({classes, user})}
			</Drawer>
		)
  }
  
  componentDidMount(){
    this.props.fecthUser();
  }

  useStyles(){
		return makeStyles({
			list: {
				width: 250,
			},
			fullList: {
				width: 'auto',
			},
		});
	}
}

const mapStateToProps = ({user})=>({
  user
})

const mapDispatchToProps = (dispatch)=>({
  fecthUser: () => dispatch(fecthUser()),
  singout: () => dispatch(singout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuDrawer);