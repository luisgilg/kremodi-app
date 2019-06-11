import { Container, Paper, Grid, Box, Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onlyAdmin, createOpenShop } from '../utils';
import ManageOpenShopCard from '../components/shop/component.manage-open-shop-card';
import ManageOpenShopForm from '../components/shop/component.manage-open-shop-form';
import _ from 'lodash';
import { fetchOpenShop, pushOpenShop, updateOpenShop } from '../actions/action.open-shop';


class ScreenOpenShop extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: false,
			openShop: null,
			action: ()=>{}
		};
	}

	addOpenShopForm = ()=> this.setState(({open}) => ({
		open: !open,
		openShop: createOpenShop(),
		action: this.save
	}))

	editOpenShopForm = ({openShop})=> this.setState(({open}) => ({
		open: !open,
		openShop,
		action: this.edit
	}))

	save= ({openShop: originalData}, {openShop: newData})=>{
		if (newData && newData.products){
			newData.products = _.map(newData.products, x => _.omit(x, ['tableData']));
		}
		const openShop = {...originalData, ...newData};
		this.props.pushOpenShop({openShop});
		this.toggleForm();
	}

	edit= ({openShop: {id}}, {openShop: newData})=>{
		if (newData && newData.products){
			newData.products = _.map(newData.products, x => _.omit(x, ['tableData']));
		}
		const openShop = {id, ...newData};
		this.props.updateOpenShop({openShop});
		this.toggleForm();
	}

	toggleForm = ()=> this.setState(({open}) => ({open: !open}))

	renderOpenShopCard = ({openShop}) => {
		return (
			<ManageOpenShopCard 
				allowEdit = {true}
				key={openShop.id}
				openShop={openShop}
				editAction={this.editOpenShopForm}
			/>
		);
	}

	renderOpenShopGridItem = ({ openShop }) => (
		<Grid key={openShop.id} item xs={12} sm={6} md={6}>
			{this.renderOpenShopCard({ openShop})}
		</Grid>
	)

	render(){
		const classes = this.useStyles();
		const {openShops} = this.props;
		const {open, action, openShop} = this.state;

		return (
		<Container>
			<Paper className={classes.container}>
				<Grid container>
					<Grid className={classes.productRow} container spacing={2}>
					{openShops && openShops.map(op => this.renderOpenShopGridItem({openShop: op}))}	
					</Grid>
					<Grid item xs={12}>
						<Box textAlign='right'>
							<Fab className={classes.button} onClick= {this.addOpenShopForm} color="primary" aria-label="Add">
								<AddIcon />
							</Fab>
						</Box>
					</Grid>
				</Grid>
			</Paper>
			<ManageOpenShopForm
				open={open}
				toggle={this.toggleForm}
				openShop={openShop}
				action={action}
			/>	
		</Container>
		)
	}

	useStyles = () => (
		{
			headerDate: 'm-2',
			header: 'm-4',
			productRow:'pl-2 pr-2',
			empty: 'm-8 p-8',
			button: '',
			container: 'p-4'
		}
	);

	componentDidMount(){
		this.props.fetchOpenShop();
	}
}

const mapStateToProps = ({openShopReducer:{openShops}})=>({  
	openShops
})
const mapDispatchToProps = (dispatch)=>({
	fetchOpenShop: ()=> dispatch(fetchOpenShop()), 
	pushOpenShop: (...args)=> dispatch(pushOpenShop(...args)), 
	updateOpenShop: (...args)=> dispatch(updateOpenShop(...args))
})

export default onlyAdmin(connect(mapStateToProps, mapDispatchToProps)(ScreenOpenShop));