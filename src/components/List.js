import React from 'react';
import Card from './Card';


const List = (props) => {
	const { items, lst_name } = props;
	return (
		<div className="nowrap overflow-x-auto bg-light-gray mb5 br4 pa2">
			{items.map((item, i) => <Card key={ lst_name + String(i) } item={ item } />)}
		</div>
	);
}

export default List;