import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {increment, decrement} from '../actions/index'

class Button extends React.Component {
	render(){
		return(

			<div>
				<button onClick={this.props.increment}>Increment</button>
				<button onClick={this.props.decrement}>Decrement</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({increment, decrement}, dispatch);
}

export default connect(null, mapDispatchToProps)(Button);
