import React from 'react'

export default class CardOeuvre extends React.Component<any, any, any> {

	public constructor(props:any) {
		super(props)
	}

	render() {
		let img:string|null = this.props.data.image? this.props.image : ""
		return(
			<div className="card-oeuvre">
				<div className="title" style={{ background: `url(${img})` }}>
					<p>{ this.props.data.author }</p>
					<h2>{ this.props.data.title }</h2>
				</div>
				<div className="price">
					<p>{ this.props.data.price }</p>
				</div>
				
				<div className="down-card">
					<p>{ this.props.data.title }</p>
				</div>
			</div>
		)
	}
}