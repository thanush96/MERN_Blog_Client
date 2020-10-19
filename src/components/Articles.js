import React from 'react'
import styled from 'styled-components'
import spinner from "../loading.gif"


const Articles = ({ posts }) => {
    return (
        <MainContainer>
            
            {
                !posts.length ? <img src={spinner} alt="loading.." />:
                
                posts.map((article, key) => (
                <div className='container'>
                    <h2>{article.title}</h2>
                    <p>{article.article}</p>
                    <span className="badge badge-secondary p-2">{article.authorname}</span>

                    <div className="row my-5">
                        <div className="col-sm-2">
                            <a href="" className="btn btn-outline-success"> Edit Article</a>
                        </div>
                        <div className="col-sm-2">
                            <a href="" className="btn btn-outline-danger"> Delete Article</a>
                        </div>
                    </div>
                </div>
            ))}
        </MainContainer>
    )
};

export default Articles

//Main Container
const MainContainer = styled.div`

img{
    width:5rem;
    display:block;
    margin: 0 auto;


}

`;
