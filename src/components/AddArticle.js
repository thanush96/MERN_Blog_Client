import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const AddArticle = () => {
	const [title, setTitle] = useState('');
	const [article, setArticle] = useState('');
	const [authorname, setAuthorName] = useState('');
	const [message, setMessage] = useState('');

	const changeOnClick = (e) => {
		e.preventDefault();

		const articles = {
			title,
			article,
			authorname,
		};

		axios
			.post('/articles/add', articles)
			.then((res) => setMessage(res.data))
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<AddArticleContainer>
			<div className="container">
				<h1>Add New Artile</h1>
				<span className="message">{message}</span>
				<form onSubmit={changeOnClick} encType="multypart/form-data">
					<div className="form-group">
						<label htmlFor="authername">Author Name</label>
						<br />
						<input
							type="text"
							value={authorname}
							onChange={(e) => setAuthorName(e.target.value)}
							className="form-control"
							placeholder="Author Name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<br />
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="form-control"
							placeholder="Title"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="artile">Article</label>
						<br />
						<textarea
							value={article}
							className="form-control"
							onChange={(e) => setArticle(e.target.value)}
							rows="3"
						></textarea>
					</div>

					<button type="submit" className="btn btn-primary">
						Post Article
					</button>
				</form>
			</div>
		</AddArticleContainer>
	);
};

export default AddArticle;

//Main Container
const AddArticleContainer = styled.div`
	margin: 3rem auto;
	padding: 4rem;
	width: 31.25rem;

	h1 {
		font-width: 900;
		color: var(--dark-green);
	}

	.message {
		color: var(--dark-green);
	}

	button {
		margin-top: 2rem;
		background: var(--dark-green);
		border: none;
		&:hover {
			background: var(--dark-green);
		}
	}
`;
