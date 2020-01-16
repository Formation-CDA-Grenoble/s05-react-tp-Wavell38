import React from 'react'

export default class CardOeuvre extends React.Component<any, any, any> {

	public constructor(props:any) {
		super(props)
	}

	render() {
		let img:string|null = this.props.image? this.props.image : ""
		return(
			<div className="card-oeuvre">
				<div className="title" style={{ background: `url(${img})` }}>
					<p>{ this.props.author }</p>
					<h2>{ this.props.title }</h2>
				</div>
				<div className="price">
					<p>{ this.props.price }</p>
				</div>
				{ this.props.children }
			</div>
		)
	}
}