import React from 'react';
import Card from './Card';


const List = (props) => {
	const { items, lst_name } = props;
	return (
		items.map((item, i) => {
			return <Card key={ lst_name + String(i) } item={ item } />;
		})
	)
}

export default List;