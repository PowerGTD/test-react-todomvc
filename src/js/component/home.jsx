import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			contacts: [],
			input: "",
			counter: 0
		};
	}

	addListItems = e => {
		let key = e.which || e.keyCode || 0;
		if (key === 13) {
			let newInput = e.target.value.trim();
			if (newInput === "") {
				return;
			}
			this.setState({ input: newInput });
			let newObject = { label: newInput, done: false };
			let newContacts = this.state.contacts;
			newContacts.push(newObject);
			let newCount = this.state.counter + 1;
			this.setState({
				contacts: newContacts,
				counter: newCount
			});
			e.target.value = "";
		}
	};

	deleteListItems = index => {
		let updatedContacts = this.state.contacts;
		let newCount = this.state.counter;
		if (this.state.counter === 0 || updatedContacts[index].done) {
			newCount = this.state.counter;
		} else {
			newCount = this.state.counter - 1;
		}
		updatedContacts.splice(index, 1);
		this.setState({
			contacts: updatedContacts,
			counter: newCount
		});
	};

	checkOffItems = index => {
		let finishedContacts = this.state.contacts;
		if (finishedContacts[index].done) return;
		finishedContacts[index].done = true;
		let newCount = this.state.counter;
		if (this.state.counter > 0) {
			newCount = this.state.counter - 1;
		} else {
			newCount = this.state.counter;
		}
		this.setState({
			contacts: finishedContacts,
			counter: newCount
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
						autoFocus
						id="addItem"
						type="text"
						placeholder="What needs to be done?"
						onKeyPress={this.addListItems}
					/>
					<ul>
						{this.state.contacts.map((item, index) => {
							return (
								<li className="flexItems" key={index}>
									<div className="listItem">
										{item.label} {item.done && " - Done"}
									</div>
									<div className="deleter">
										<span
											onClick={() =>
												this.checkOffItems(index)
											}>
											<i className="fas fa-check-square" />{" "}
											&ensp;
										</span>
										<span
											onClick={() =>
												this.deleteListItems(index)
											}>
											<i className="fas fa-window-close" />
										</span>
									</div>
								</li>
							);
						})}
						<li id="counter">
							{this.state.counter === 1
								? this.state.counter + " item left"
								: this.state.counter + " items left"}
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
