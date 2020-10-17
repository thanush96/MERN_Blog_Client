import React from 'react'

const Articles = ({ posts }) => {
    return (
        <div>
            welcome to Articles component....
            {posts.map((article, key) => (
                <div>
                <h2>{article.title}</h2>
                <p>{article.article}</p>
                <span>{article.authorname}</span>
                </div>

            ))}
        </div>
    )
};

export default Articles
