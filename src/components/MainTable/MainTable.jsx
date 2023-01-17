import "./index.scss";
import { useEffect, useState } from "react";
import { GET } from "../../utils/api";

export const MainTable = () => {
	const [comments, setComments] = useState([]);
	const [skip, setSkip] = useState(0);
	const [limit, setLimit] = useState(5);
	const [counter, setCounter] = useState(1);

	let isDisabled = false;

	useEffect(() => {
		GET("https://dummyjson.com", `/comments?limit=${limit}&skip=${skip}`).then(
			(data) => setComments([...comments, ...data.comments])
		);
	}, [limit]);

	const getMore = () => {
		setLimit((limit) => limit + 5);
		setSkip((skip) => skip + 5);
		setCounter((counter) => counter + 1);
	};

	counter === 6 && (isDisabled = true);

	return (
		<div className="MainTable">
			<table>
				<tbody>
					<tr>
						<th>postId</th>
						<th>Username</th>
						<th>Comment</th>
					</tr>
					{comments
						.sort((a, b) => (a.postId > b.postId ? 1 : -1))
						.filter(
							(comment, index, self) =>
								self.findIndex((c) => c.postId === comment.postId) === index
						)
						.map((comment, index) => {
							return (
								<tr key={index}>
									<td>{comment.postId}</td>
									<td>{comment.user.username}</td>
									<td>{comment.body}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			<div className="bottomWrapper">
				<p>Data block n. {counter}</p>
				<button onClick={getMore} disabled={isDisabled}>
					Get more data
				</button>
			</div>
		</div>
	);
};

// # MainTable
// MainTable is a React component that displays a table of comments from an API. It uses the `GET` function from `utils/api` to fetch data from the API, and stores it in the `comments` state. The table is sorted by postId, and duplicate entries are filtered out. The user can click the "Get more data" button to load more comments, up to a maximum of 6 blocks of 5 comments each.
