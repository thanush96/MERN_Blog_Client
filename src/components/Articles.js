import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import spinner from '../loading.gif';

const Articles = ({ posts }) => {
	return (
		<MainContainer>
			{!posts.length ? (
				<img src={spinner} alt="loading.." />
			) : (
				posts.map((article, key) => (
					<div className="container" key={key}>
						<Link to={{
                            pathname:`/article/${article._id}`
                        }}>
							<h2>{article.title}</h2>
						</Link>

						<p>{article.article}</p>
						<span className="badge badge-secondary p-2">{article.authorname}</span>

						<div className="row my-5">
							<div className="col-sm-2">
								<Link to="/edid-article" className="btn btn-outline-success">
									{' '}
									Edit Article
								</Link>
							</div>
							<div className="col-sm-2">
								<button to="/delete-article" className="btn btn-outline-danger">
									{' '}
									Delete Article
								</button>
							</div>
						</div>
					</div>
				))
			)}
		</MainContainer>
	);
};

export default Articles;

//Main Container
const MainContainer = styled.div`
	img {
		width: 5rem;
		display: block;
		margin: 0 auto;
	}
`;
