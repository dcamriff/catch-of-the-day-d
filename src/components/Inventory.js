import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	render () {
		return (
			<div className="Inventory">
				<AddFishForm />
				<h2>Inventory</h2>
			</div>
		);
	}
}

export default Inventory;