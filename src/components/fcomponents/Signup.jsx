import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/usersSlice";
import { useNavigate } from "react-router-dom";
const Signup = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signup(formData));
		console.log(formData); // This will log the key-value pairs
		// You can send the formData to your backend API or do further processing here
	};
	return (
		<div className="card p-5">
			<div className="card-title text-success fs-3 text-center">
				Add new user
			</div>
			<form
				onSubmit={handleSubmit}
				className="form-wrapper w-100 d-flex flex-column mt-2"
				style={{ gap: 10, minWidth: "400px" }}
			>
				<label htmlFor="" className="fw-bold text-secondary">
					Name
				</label>
				<input
					name="name"
					onChange={handleChange}
					value={formData.name}
					required
					type="text"
					className="form-control"
				/>
				<label htmlFor="" className="fw-bold text-secondary">
					Email
				</label>
				<input
					name="email"
					onChange={handleChange}
					value={formData.email}
					required
					type="email"
					className="form-control"
				/>
				<label htmlFor="" className="fw-bold text-secondary">
					Role
				</label>
				<input
					name="role"
					onChange={handleChange}
					value={formData.role}
					required
					type="text"
					className="form-control"
				/>
				<label htmlFor="" className="fw-bold text-secondary">
					Password
				</label>
				<input
					name="password"
					onChange={handleChange}
					value={formData.password}
					required
					type="password"
					className="form-control"
				/>
				<button className="btn btn-primary w-100 mt-4 btn-lg" type="submit">
					ADD USER
				</button>
			</form>
			<p
				onClick={() => navigate("/login")}
				className="text-underline text-primary mt-3"
				style={{ cursor: "pointer" }}
			>
				Already have an Account?
			</p>
		</div>
	);
};

export default Signup;
