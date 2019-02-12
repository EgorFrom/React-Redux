import React, {Component} from 'react';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';

class CarsList extends React.Component {
	render () {
		return (
				<ol>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ol>
			);
	}
}

	function mapStateToProps (state) {
		return {
			cars: state.cars
		};
	}

export default connect(mapStateToProps)(CarsList);