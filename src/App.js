import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelFrom from './memo/DelForm';
import MemoStore from './memo/Store';


class App extends Component {

	td = {
		width: '250px'
	};

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<h1>Memo</h1>
				<AddForm />
				<hr/>
				<table>
					<tbody>
						<tr>
							<td style={this.td}>
								<FindForm />
							</td>
							<td style={this.td}>
								<DelFrom />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect()(App);
