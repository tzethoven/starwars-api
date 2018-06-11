import React from 'react';

const ScrollH = (props) => {
	const scrollh_style = {
		overflowX: "scroll" 
	};
	return (
		<div style={scrollh_style} className="w-100 h5">
			{props.children}
		</div>
	);
}

export default ScrollH;