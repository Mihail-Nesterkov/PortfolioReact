import React from 'react';
import './index.css';
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Portfolio from "./pages/portfolio/portfolio";
import Footer from "./componets/footer/footer";
import AboutMe from "./pages/aboutMe/aboutMe";
function App() {
  const card = [
    {
      name: "Youtalk blog",
      urlSite: "skill_youtalk_blog/",
      urlCode: "skill_youtalk_blog.git"
    },
    {
      name: "Kanban Board",
      urlSite: "",
      urlCode: "KanbanBoard.git"
    },
    {
      name: "Book shop",
      urlSite: "",
      urlCode: "BookShop.git"
    },
    {
      name: "Slider",
      urlSite: "Slider/",
      urlCode: "Slider.git"
    },
    {
      name: "Учебные задания - Введение в JS",
      urlSite: "",
      urlCode: "module5_homework.git"
    },
    {
      name: "Учебные задания - Функции",
      urlSite: "",
      urlCode: "module6_homework.git"
    },
    {
      name: "Учебные задания - Объекты",
      urlSite: "",
      urlCode: "module7_homework.git"
    },
    {
      name: "Учебные задания - AJAX",
      urlSite: "",
      urlCode: "module9_homework.git"
    },
    {
      name: "Учебные задания - API браузера",
      urlSite: "",
      urlCode: "module10_homework.git"
    },
    {
      name: "Учебные задания - Тестирование",
      urlSite: "",
      urlCode: "module11_homework.git"
    }
  ]
  const cardsDes = [
    {
      name: "ShutterStock",
      urlSite: "",
      urlCode: "",
      flagg: "https://www.shutterstock.com/g/Nesterkov+Mihail?rid=4543000&utm_medium=nativeapp&utm_source=ctrbreferral-link"
    },
    {
      name: "Adobe Stock",
      urlSite: "",
      urlCode: "",
      flagg: "https://stock.adobe.com/ru/contributor/209799974/Mihail"
    }
  ]
  const cardssDD = [
    {
      name: "Desing / Дизайн",
      urlSite: "",
      urlCode: "",
      flagg: "/portfolioDes"
    },
    {
      name: "Development Разработка",
      urlSite: "",
      urlCode: "",
      flagg: "/portfolioDev"
    }
  ]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/portfolioDD' element={<Portfolio cardss={cardssDD} />}></Route>
        <Route path='/portfolioDev' element={<Portfolio cardss={card} />}></Route>
        <Route path='/portfolioDes' element={<Portfolio cardss={cardsDes} />}></Route>
        <Route path='/aboutMe' element={<AboutMe />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
