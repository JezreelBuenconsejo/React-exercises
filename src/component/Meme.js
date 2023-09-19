import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/style.css';

export default function Meme(){
    return (
        <div className="meme-container m-4 p-3">
            <form>
                <div className="input-container gap-3 d-grid d-sm-flex mb-3">
                    <input type="text" placeholder="Upper Text" className=" w-100 rounded border-1 p-2 py-3"/>
                    <input type="text" placeholder="Lower Text" className=" w-100 rounded border-1 p-2 py-3"/>
                </div>
                <button onClick type="submit" className="w-100 p-3 border-0 rounded button text-white">
                    Get a new meme image 🖼
                </button>
            </form>
        </div>
    )
}