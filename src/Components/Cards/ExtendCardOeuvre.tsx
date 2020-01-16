import React from 'react'

import { CardOeuvre } from '.'

export default class ExtendCardOeuvre extends React.Component<any, any, any> {

	public constructor(props:any) {
		super(props)
	}

	render() {
		return(
			<>
				<CardOeuvre data={ this.props.data }>
					<div className="down-card">
						<p>{ this.props.data.title }</p>
					</div>
				</CardOeuvre>
			</>
		)
	}
}