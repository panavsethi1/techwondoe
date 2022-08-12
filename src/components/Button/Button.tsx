import React from 'react';
import './button.css';

function Button(props: any) {
	return (
		<a
			href='/'
			style={{ backgroundColor: props.bg, color: props.color }}
			className={`button button-${props.variant} px-4 py-2 rounded`}>
			{props.label}
		</a>
	);
}

export default Button;
