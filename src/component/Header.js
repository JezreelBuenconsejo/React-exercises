import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import headerImg from '../assets/img/header-img.png';
import '../assets/css/style.css';

export default function Header(){
    return (
        <section className="p-3 py-xl-4 px-xl-5 header d-flex justify-content-between align-items-center">
            <div className="header-img-container d-flex align-items-center">
                <img src={headerImg} className="img-fluid pe-2" alt="img"/>
                <h1 className="header-text fw-bold text-white m-0">Meme Generator</h1>
            </div>
            <div className="title-container">
                <span className="text-white fw-medium">React Course - Project 3</span>
            </div>
        </section>
    )
}