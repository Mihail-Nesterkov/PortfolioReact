import React from "react";
import "./footer.css"
import {Link} from "@react-email/link";
import {NavLink} from "react-router-dom";
import gitHabLogo from "../../img/github_logo.png"

export default function Footer () {

    return (
        <div className={"footer"}>
            <ul className={"ulFoot"}>
                <li className={"textFoot"}>Нестерков</li>
                <li className={"textFoot"}>Михаил</li>
                <li className={"textFoot"}>Валериевич</li>
            </ul>
            <ul className={"ulFoot"}>
                <li className={"textFoot"}>Контакты:</li>
                <li><Link href="mailto:nemiva86@gmail.com" className={"navEmail"} style={{color: "white"}}>nemiva86@gmail.com</Link></li>
                <li><Link href="mailto:russkiu_medved@mail.ru" className={"navEmail"} style={{color: "white"}}>russkiu_medved@mail.ru</Link></li>
            </ul>
            <ul className={"ulFoot"}>
                <li><NavLink to={"https://github.com/Mihail-Nesterkov"} className={"GitLogo"}><img src={gitHabLogo} alt="logo GitHab" /> GitHub</NavLink></li>
            </ul>
        </div>
    );
}