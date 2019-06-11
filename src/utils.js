import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import moment from 'moment';

export const normalizeUser = ({
	uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt,
	family_name, given_name, profileId, isAdmin

}) => ({
	uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt, family_name, given_name, profileId, isAdmin
});


export const isSignedin = ({ user }) => user && user.uid && user.displayName;

export const isAdmin = ({ user }) => isSignedin({ user }) && user.isAdmin;

export const createProduct = () => ({
	title:'',
	subtitle: '',
	image: '/images/griego-test.jpg',
	description: '',
	price: 0,
	slug: '',
	dependsOn: ''
});

export const createOpenShop = () => {
	return {
		title:'Estamos recibiendo pedidos...',
		subtitle: '',
		products: [],
		startDate: moment().format('YYYY-MM-DD'),
		endDate : moment().add(5,'days').format('YYYY-MM-DD'),
	};
};

export function onlyAdmin(WrappedComponent) {
	const mapStateToProps = ({user})=>({
		user
	});
	return connect(mapStateToProps)(({user})=>{
		if (!user || !user.isAdmin){
			return  (
				<Redirect to={AppRoutes.landing} />
			)
		}
		return (<WrappedComponent />);
	})
}