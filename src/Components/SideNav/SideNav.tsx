import React from 'react'

import { ButtonSideBar } from '.'

import { buttonNav as data } from '../../data'

export default class SideNav extends React.Component<any, any, any> {

	public constructor(props:any) {
		super(props)

		this.state = {
			data: data
		}
	}

	render() {
		return(
			<nav>
				{ this.state.data? this.state.data.map((item:any, index:number) => {
					<ButtonSideBar data= { item } key={ index } />
				}) : null }
			</nav>
		)
	}
}