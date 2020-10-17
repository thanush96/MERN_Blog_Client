import React from 'react'
import styled from 'styled-components'
import logo from '../../logo.jpg'

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav class="navbar navbar-expand-lg navbar-light" px-5 py-0>
                <a class="navbar-brand" href="#">
                    <img style={{width:"50px"}} src={logo} alt="logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Add Article</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarContainer>
    );
};

export default Navbar;

//MAIN NAVBAR CONTAINER
const NavbarContainer = styled.div`
    background:var(--dark-green);
    .nav-link{
        color:#fff !important;
        &:hover{
            background:var(--light-green);
        }
    }
`;
