import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Inbox , Mail, People} from '@material-ui/icons';

class SideMenuDrawer extends Component {

	onClose = (open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
		}
		return this.props.onClose && this.props.onClose(open);
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

	sideList = ({classes}) => (
		<div
      className={classes.list}
      role="presentation"
      onClick={this.onClose(false)}
      onKeyDown={this.onClose(false)}
    >
      <List>
        {['Iniciar session', 'Crear cuenta'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
			<List>
        {['Perfil', 'Compras', 'Cerrar sesion'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <People /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Acerca de nosotros', 'Contacto'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
	);

	render(){
		const classes = this.useStyles();
		const {open = false} = this.props;

		return (
			<Drawer open={open} onClose={this.onClose(false)}>
				{this.sideList({classes})}
			</Drawer>
		)
	}
}

export default SideMenuDrawer;