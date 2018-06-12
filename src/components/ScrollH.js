import React from 'react';

const ScrollH = (props) => {
	const scrollh_style = {
		overflowX: "scroll" 
	};
	return (
		<div 
			style={scrollh_style}
			className="w-80 center"
		>
			{ props.children }
		</div>
	);
}

export default ScrollH;