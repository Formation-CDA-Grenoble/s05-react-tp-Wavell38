import React from 'react'

import { Home } from '.'

export default class ContainerPage extends React.Component<any,any,any> {
	public constructor(props:any) {
		super(props)
	}

	render() {
		return(
			<Home />
		)
	}
}