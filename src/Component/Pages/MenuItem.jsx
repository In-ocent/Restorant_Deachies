import React from "react";

export default function MenuItem({icon, title, subtitle, active }){
    return(
        <li className={`menu-item ${active ? "active" : "" }`}>
            <div className="icon">{icon}</div>
            <div className="tex">
                <h1 className="title">{title}</h1>
                {subtitle && <p>{subtitle}</p> }
            </div>
            
        </li>
    )
}