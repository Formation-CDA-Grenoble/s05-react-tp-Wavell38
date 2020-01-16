import React from 'react'

import { ExtendCardOeuvre } from '.'
import { oeuvreData } from '../data'


export default class OeuvresContainer extends React.Component<any, any, any> {
	public constructor(props:any) {
		super(props)

		this.state = {
			data: oeuvreData
		}
	}

	render() {
		return(
			<div className="Oeuvres-container">
				{ this.state.data? this.state.data.map((item:any, index:number) => {
					<ExtendCardOeuvre data={ item } key={ index } id={ index }/>
				}) :null }
			</div>
		)
	}
}