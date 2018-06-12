import React from 'react';
import List from './List';


const ListBox = (props) => {
	const sw_lists = props.lsts;
	let jsx_buffer = [];
	
	for (let lst_name in sw_lists) {
		jsx_buffer.push(<h2 key={ lst_name + "-title" } className="tc ttc">{ lst_name }</h2>);

		let lst = sw_lists[lst_name].results;

		if (lst == null) {
			jsx_buffer.push(
				<p key={ lst_name + "-loading" }>
					Loading...
				</p>
			);

		} else {
			jsx_buffer.push(
				<List 
					items={ lst } 
					lst_name={ lst_name } 
					key={ lst_name }
				/>
			);
		}
	}

	return (
		<div className="tc w-80 center">
			{ jsx_buffer }
		</div>
	);
}

export default ListBox;
