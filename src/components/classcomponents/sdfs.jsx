import React, { Component } from "react";
import { connect } from "react-redux";
class SigninC extends Component {
	constructor(props) {
		super();
		this.state = {
			email: "",
			password: "",
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		event.preventDefault();
		const target = event.target;
		this.setState({
			[target.name]: target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div
				className="container d-flex align-items-center justify-content-center bg-success"
				style={{ minHeight: "100vh" }}
			>
				<div className="card p-5">
					<div className="card-title text-success fs-3 text-center">
						Sign In
					</div>
					<form
						onSubmit={this.handleSubmit}
						className="form-wrapper w-100 d-flex flex-column mt-2"
						style={{ gap: 10, minWidth: "400px" }}
					>
						<label htmlFor="" className="fw-bold text-secondary">
							Email
						</label>
						<input
							name="email"
							onChange={this.handleChange}
							value={this.state.email}
							required
							type="email"
							className="form-control"
						/>
						<label htmlFor="" className="fw-bold text-secondary">
							Password
						</label>
						<input
							name="password"
							onChange={this.handleChange}
							value={this.state.password}
							required
							type="password"
							className="form-control"
						/>
						<button className="btn btn-primary w-100 mt-4 btn-lg" type="submit">
							LOG IN
						</button>
					</form>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	count: state.users,
});

export default connect(mapStateToProps)(SigninC);
