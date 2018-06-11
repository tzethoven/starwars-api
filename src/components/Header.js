import React from 'react';


const Header = (props) => {
	const sw_img = "https://vignette.wikia.nocookie.net/disney/images/2/21/Star_Wars_logo.png/revision/latest?cb=20170909202326";
	return (
		<header className="header bg-navy h5 tc" >
        	<img src={sw_img} className="h-75 ma4" alt="Star Wars" />
        </header>
	)
}


export default Header;
