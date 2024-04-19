import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/usersSlice";
const Details = () => {
	const dispatch = useDispatch();
	const recipes = useSelector((el) => el.userbase.recipes);
	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return (
		<div className="container">
			{/* <Signup /> */}
			<h3 className="border-bottom mt-4 pb-2 mb-4">Receipe List</h3>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Dish</th>
						<th scope="col">Cuisine</th>
						<th scope="col">Meal Type</th>
						<th scope="col">Password</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((el) => (
						<tr key={el.id}>
							<th scope="row">{el.id}</th>
							<td>{el.name}</td>
							<td>{el.cuisine}</td>
							<td>{el.mealType.join()}</td>
							<td>
								<img height="100" src={el.image} alt="" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Details;
