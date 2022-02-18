import React from "react";
import './menu-item.style.scss'

const MenuItem = ({title, imgUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image"
        //style takes in an obj that has value === to the css value you want to apply to this elem 
        // the first pair of parenthesis is the pair to signify that we are going to have code in here. The second pair is an object bc style takes in an object
        // ex: let person = {fname:'J', lname:'D',phone:'xxx'}
        style={{
            backgroundImage : `url(${imgUrl})`  //javescript string interpoletion | $ is like dereferencing to the variable to get the value itself
        }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='sub-title'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;