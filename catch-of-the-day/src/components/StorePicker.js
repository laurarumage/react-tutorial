import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	constructor(){
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event){
		event.preventDefault();
		console.log('You changed the URL');
		// first grab the text from the box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// second transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		return(
			<form onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}


StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;