import { Component } from 'react';
import {initializeApp} from '../../api/init';

class FirebaseInit extends Component {
	componentDidMount(){
		initializeApp();
	}

	render() {
    return this.props.children;
  }
}

export default FirebaseInit;