import React from 'react'

import { CardOeuvre } from '.'
import { oeuvreData as data } from '../../data'


export default class OeuvresContainer extends React.Component<any, any, any> {
	public constructor(props:any) {
		super(props)

		this.state = {
			data: data
		}
	}

	render() {
		console.log(this.state.data)
		return(
			<div className="Oeuvres-container">
				{ this.state.data? this.state.data.map((item:any, index:number) => {
					<CardOeuvre data={ item } key={ index } />
				}) : null }
			</div>
		)
	}
}