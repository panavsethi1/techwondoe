/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './heading.css';

function Heading(props: any) {
	return <h2 className={`heading-${props.variant}`}>{props.label}</h2>;
}

export default Heading;
