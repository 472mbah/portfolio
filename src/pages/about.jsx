import React from 'react';
import style from './index.module.css';

const message = `Hello there, My name is Momodou and welcome to my portfolio!
I am a technology enthusiast with a particular interest in Artificail intelligence and Software development.   
This portfolio will showcase the work that I have been up to in my own time ✌. 
`

export default ({mobile}) => {
    return (
        <div>
            <p className={mobile? style.about_text_mobile:style.about_text}>{message}</p>        
        </div>
    )
    
} 