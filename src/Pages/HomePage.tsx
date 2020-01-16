import React from 'react'

import { OeuvresContainer } from '../Components/Cards'

export default class HomePage extends React.Component<any,any,any> {
	public constructor(props:any) {
		super(props)
	}

	render() {
		return(
			<div>
				<h1>Prochainement en libraire !</h1>
				<OeuvresContainer/>
			</div>
		)
	}
}