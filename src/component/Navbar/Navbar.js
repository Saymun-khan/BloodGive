import React from 'react'
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MdAccessible } from 'react-icons/md'
import { Button, Links, Logo, LogoText, NavLinks, Anchor } from './NavbarElements'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info" style={{ marginTop: 0 }}>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img style={{ width: 70, height: 70, borderRadius: 40, display: 'flex', marginTop: '5px', alignItems: 'center' }} src="assets/Logo.jpg" alt="imagehereis" />
                    </a>
                    <LogoText>JBBD</LogoText>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" style={{ marginLeft: '35px' }} id="navbarNav">
                        <ul class="navbar-nav" style={{ textAlign: 'center', marginLeft: '120px' }}>
                            <div style={{ marginLeft: '15px' }}>
                                <li class="nav-item" style={{ marginLeft: '25px' }}>
                                    <a class="nav-link active" aria-current="page" href="/">রক্তের আবেদন<br></br> তালিকা</a>
                                </li>
                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/donar">রক্তদাতাদের<br></br> তালিকে</a>
                                </li>
                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <li class="nav-item">
                                    <a class="nav-link active" href="request">রক্তের জন্য<br></br> আবেদন করুন</a>
                                </li>
                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <li class="nav-item">
                                    <a class="nav-link active" style={{ marginLeft: '15px' }} href="/register"><button className='btn btn-success' style={{ marginLeft: '70px' }}>লগইন করুন/নতুন একাউন্ট করুন</button></a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*<Logo>
                <img style={{ width: 80, height: 80, borderRadius: 40 }} src="assets/Logo.jpg" alt="imagehereis" />;
                <LogoText>BloodDonation</LogoText>
                <NavLinks>
                    <Links><Anchor href="/">রক্তের আবেদন<br></br> তালিকা</Anchor></Links>
                    <Links><Anchor href="/donar">রক্তদাতাদের<br></br> তালিকে</Anchor></Links>
                    <Links><Anchor href="/request">রক্তের জন্য<br></br> আবেদন করুন</Anchor></Links>
                    <Links><Anchor href="/register"><Button>লগইন করুন/নতুন একাউন্ট করুন</Button></Anchor></Links>
                </NavLinks>

            </Logo>*/}
        </div >
        /* <Links><Anchor href="/">রক্তের আবেদন<br></br> তালিকা</Anchor></Links>
                    <Links><Anchor href="/donar">রক্তদাতাদের<br></br> তালিকে</Anchor></Links>
                    <Links><Anchor href="/request">রক্তের জন্য<br></br> আবেদন করুন</Anchor></Links> */
    )
}

export default Navbar
