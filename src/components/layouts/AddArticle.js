import React from 'react';
import styled from 'styled-components';

export const AddArticle = () => {
	return (
		<AddArticleContainer>
			<div className="container">
				<h1>Add New Artile</h1>
				<form>
					<div className="form-group">
						<label htmlFor="authername">Author Name</label>
						<br />
            <input 
              type="text" 
              className="form-control" 
              placeholder="Author Name" />
					</div>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<br />
						<input type="text" className="form-control" placeholder="Title" />
					</div>

					<div className="form-group">
						<label htmlFor="artile">Article</label>
						<br />
						<textarea className="form-control" rows="3"></textarea>
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

	button {
		margin-top: 2rem;
		background: var(--dark-green);
		border: none;
		&:hover {
			background: var(--dark-green);
		}
	}
`;
