import { AppBar, Button, Container, Dialog, DialogContent, IconButton, InputAdornment, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import { Close as CloseIcon, Save } from '@material-ui/icons';
import React, { Component } from 'react';

class ProductFrom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: null
		};
	}

	renderForm = ({
		product: {
			id, title, subtitle, image, description, price, slug, dependsOn
		}, classes
	}) => {

		return (
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
					value = {id}
				/>
				<TextField
					autoFocus
					id="title"
					label="Nombre"
					type="text"
					className={classes.field}
					margin="normal"
					defaultValue={title}
					onChange={({ target }) => this.setState(prev =>({
						product: {
							...prev.product,
							title: target.value
						}
					}))}
				/>
				<TextField
					id="subtitle"
					label="Subtitulo"
					type="text"
					className={classes.field}
					margin="normal"
					defaultValue={subtitle}
					onChange={({ target }) => this.setState(prev =>({
						product: {
							...prev.product,
							subtitle: target.value
						}
					}))}
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
					
					defaultValue={price}
					onChange={({ target }) => this.setState(prev =>({
						product: {
							...prev.product,
							price: target.value
						}
					}))}
				/>
				<TextField
					margin="normal"
					id="slug"
					label="Slug"
					type="text"
					className={classes.field}
					// value={slug}
					defaultValue={slug}
					onChange={({ target }) => this.setState(prev =>({
						product: {
							...prev.product,
							slug: target.value
						}
					}))}
				/>
				<TextField
					margin="normal"
					id="dependsOn"
					label="Depende de"
					type="text"
					className={classes.field}

					defaultValue={dependsOn}
					onChange={({ target }) => this.setState(prev =>({
						product: {
							...prev.product,
							dependsOn: target.value
						}
					}))}
				/>
				<TextField
					id="image"
					label="Imagen"
					type="text"
					className={classes.field}
					fullWidth
					margin="normal"
					
					defaultValue={image}
					onChange={({ target }) => this.setState(prev =>({
						product: {
							...prev.product,
							image: target.value
						}
					}))}
					
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
					defaultValue={description}
					onChange={({ target }) => this.setState(prev =>({
						product: {
							...prev.product,
							description: target.value
						}
					}))}
				/>
			</form>
		)
	}

	onAction = ()=> {
		this.props.action(this.props, {...this.state});
		this.setState({
			product:null
		})
	}

	onToogle = ()=> {
		this.props.toggle(this.props, {...this.state});
		this.setState({
			product:null
		})
	}

	render() {
		const { open, product} = this.props;
		if (!product){
			return (<div />);
		}

		const classes = this.useStyles();
		
		return (
			<Dialog
				fullScreen
				open={open}
			>
				<AppBar style={classes.appBar}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={this.onToogle} aria-label="Close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" style={classes.title}>
							Agregar/Editar Producto
            </Typography>
						<Button color="inherit" onClick={this.onAction}>
							<Save />
							<span className={classes.saveButton}>Guardar</span>
						</Button>
					</Toolbar>
				</AppBar>
				<DialogContent>
					<Container>
						<Paper className={classes.container}>
							{this.renderForm({classes, product})}
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
			field: 'mr-4',
			container: 'p-4'
		}
	);
}

export default ProductFrom;