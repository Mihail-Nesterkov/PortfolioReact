import {Link, NavLink} from "react-router-dom";
import "./portfolio.css"

export default function Portfolio (props) {
  console.log(props.cardss[0].flagg)
  const firstUrlSite = 'https://mihail-nesterkov.github.io/'
  const firstUrlCode = 'https://github.com/Mihail-Nesterkov/'
  let listCard

  if (props.cardss[0].flagg === undefined){
    listCard = props.cardss.map((listCardItem) => (
        <div className={"card"} key={listCardItem.name}>
          <h4 className={"cardName"}>{listCardItem.name}</h4>
          <div className={"buttonCard"}>
            {listCardItem.urlCode.length > 0 ?
                <Link to={`${firstUrlCode}${listCardItem.urlCode}`} className={"aCard"}>Код</Link> :
                <Link to={`${firstUrlCode}${listCardItem.urlCode}`} className={"aCard block"}>Код</Link>}
            {listCardItem.urlSite.length > 0 ?
                <Link to={`${firstUrlSite}${listCardItem.urlSite}`} className={"aCard"}>Сайт</Link> :
                <Link to={`${firstUrlSite}${listCardItem.urlSite}`} className={"aCard block"}>Сайт</Link>}
          </div>
        </div>
    ));
  } else {
    listCard = props.cardss.map((listCardItem) => (
        <NavLink to={listCardItem.flagg} style={{textDecoration: "none", color: "black", cursor: "pointer"}} >
      <div className={"card cardLink"} key={listCardItem.name}>
          <h3 className={"cardName"} style={props.style}>{listCardItem.name}</h3>
      </div></NavLink>
    ));
  }

  return (
    <div className={"mainPortfolio"}>
      <div className={"wrapper"}>
      {listCard}
      </div>
    </div>
  )
}