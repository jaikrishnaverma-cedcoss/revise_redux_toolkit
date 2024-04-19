import React from "react";
import { useSelector } from "react-redux";
const Users = () => {
	const users = useSelector((el) => el.userbase.users);

	return (
		<div className="container">
			{/* <Signup /> */}
			<h3 className="border-bottom mt-4 pb-2 mb-4">User List</h3>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Role</th>
						<th scope="col">Password</th>
					</tr>
				</thead>
				<tbody>
					{users.map((el) => (
						<tr key={el.id}>
							<th scope="row">{el.id}</th>
							<td>{el.name}</td>
							<td>{el.email}</td>
							<td>{el.role}</td>
							<td>{el.password}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
