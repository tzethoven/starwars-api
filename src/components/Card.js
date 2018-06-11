import React from 'react';

const disp_props = ["name", 
					"title", 
					"height", 
					"population", 
					"director", 
					"classification",
					"manufacturer"];

const Card = (props) => {
	const { item } = props;
	let jsx_buffer = [];
	let i = 0;
	for (let prop_name in item) {
		if (!disp_props.includes(prop_name)) {continue};
		jsx_buffer.push(<span className="b ttc" key={"prop-" + i}>{ prop_name + ": " }</span>);
		jsx_buffer.push(<span key={"val-" + i}>{ item[prop_name] }</span>);
		jsx_buffer.push(<br key={"br-" + i}/>);
		i++;
	}

	return (
		<div className="tl bg-yellow dib w5 h4 truncate br3 pa3 ma2 pointer grow ba bw2 shadow-5 ">
			{ jsx_buffer }
		</div>
	);
}

export default Card;