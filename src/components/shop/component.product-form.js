import React, { Component } from 'react';
import { InputAdornment, Paper, Container, Dialog, DialogContent, Button, AppBar, Toolbar, IconButton, Typography, TextField } from '@material-ui/core';
import { Close as CloseIcon, Save } from '@material-ui/icons';


class ProductFrom extends Component {

	render() {
		const classes = this.useStyles();
		const { open, toggle } = this.props;
		return (
			<Dialog
				fullScreen
				open={open}
			>
				<AppBar style={classes.appBar}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={toggle} aria-label="Close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" style={classes.title}>
							Agregar/Editar Producto
            </Typography>
						<Button color="inherit" onClick={toggle}>
							<Save />
							<span className={classes.saveButton} >Save</span>
						</Button>
					</Toolbar>
				</AppBar>
				<DialogContent>
					<Container>
						<Paper className={classes.container}>
							<form>
								<TextField
									id="id"
									label="Id"
									type="text"
									className={classes.field}
									InputProps={{
										readOnly: true,
									}}
									variant="filled"
									fullWidth
									margin="normal"
								/>
								<TextField
									autoFocus
									id="title"
									label="Nombre"
									type="text"
									className={classes.field}
									margin="normal"
								/>
								<TextField
									id="subtitle"
									label="Subtitulo"
									type="text"
									className={classes.field}
									margin="normal"
								/>
								<TextField
									id="price"
									label="Precio"
									type="number"
									className={classes.field}
									margin="normal"
									InputProps={{
										startAdornment: <InputAdornment position="start">$</InputAdornment>,
									}}
								/>
								<TextField
									margin="normal"
									id="slug"
									label="Slug"
									type="text"
									className={classes.field}
								/>
								<TextField
									margin="normal"
									id="dependsOn"
									label="Depende de"
									type="text"
									className={classes.field}									
								/>
								<TextField
									id="image"
									label="Imagen"
									type="text"
									className={classes.field}
									fullWidth
									margin="normal"
								/>
								<TextField
									id="description"
									label="Descripcion"
									rows="2"
									fullWidth
									multiline
									className={classes.field}
									variant="filled"
									margin="normal"
								/>
							</form>
						</Paper>
					</Container>
				</DialogContent>
			</Dialog>
		)
	}

	useStyles = () => (
		{
			appBar: {
				position: 'relative',
			},
			title: {
				marginLeft: 2,
				flex: 1,
			},
			saveButton: 'ml-2 mr-2',
			field: '',
			container: 'p-4'
		}
	);
}

export default ProductFrom;