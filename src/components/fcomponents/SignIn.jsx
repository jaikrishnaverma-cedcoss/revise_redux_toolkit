import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../redux/sessionSlice";

const SigninComp = () => {
	const dispatch = useDispatch();
	const {
		session,
		userbase: { users },
	} = useSelector((el) => el);
	console.log({ session, users });
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (session?.id) navigate("users");
	}, [session]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = users.findIndex(
			(el) =>
				el.email == formData.email && formData.password == formData.password
		);
		if (user !== -1) {
			dispatch(setSession(users[user]));
			navigate("/users");
			console.log({ user: users[user] });
		} // This will log the key-value pairs
		// You can send the formData to your backend API or do further processing here
	};
	return (
		<div className="card p-5">
			<div className="card-title text-success fs-3 text-center">Sign In</div>
			<form
				onSubmit={handleSubmit}
				className="form-wrapper w-100 d-flex flex-column mt-2"
				style={{ gap: 10, minWidth: "400px" }}
			>
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
					SIGN IN
				</button>
			</form>
			<p
				onClick={() => navigate("/register")}
				className="text-underline text-primary mt-3"
				style={{ cursor: "pointer" }}
			>
				Dont have an account?
			</p>
		</div>
	);
};

export default SigninComp;
