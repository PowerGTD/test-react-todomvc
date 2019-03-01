import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			contacts: ["Chase girls", "Code cool stuff", "Crush weights"],
			input: ""
		};
	}

	addListItems = e => {
		let key = e.which || e.keyCode || 0;
		if (key === 13) {
			this.setState({ input: e.target.value });
			let newContacts = this.state.contacts;
			newContacts.push(e.target.value);
			this.setState({
				contacts: newContacts
			});
			e.target.value = "";
		}
	};

	deleteListItems = index => {
		let updatedContacts = this.state.contacts;
		updatedContacts.splice(index, 1);
		this.setState({
			contacts: updatedContacts
		});
	};

	render() {
		return (
			<div className="fullPage">
				<div className="header">
					<h1>todos</h1>
				</div>
				<div className="container">
					<input
						id="addItem"
						type="text"
						placeholder="What needs to be done?"
						onKeyPress={this.addListItems}
					/>
					<ul>
						{this.state.contacts.map((item, index) => {
							return (
								<li className="flexItems" key={index}>
									<div className="listItem">{item}</div>
									<div className="deleter">
										<span
											onClick={() =>
												this.deleteListItems(index)
											}>
											x
										</span>
									</div>
								</li>
							);
						})}
						<li id="counter">
							{this.state.contacts.length === 1
								? this.state.contacts.length + " total item"
								: this.state.contacts.length + " total items"}
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
