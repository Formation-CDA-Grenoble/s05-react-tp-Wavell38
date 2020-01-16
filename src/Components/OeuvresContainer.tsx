import React from 'react'

import { CardOeuvre } from '.'
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
					<CardOeuvre data={ item } key={ index }>
						<div className="down-card">
							<p>{ item.title }</p>
						</div>
					</CardOeuvre>
				}) :null }
			</div>
		)
	}
}