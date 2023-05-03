import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header'
import SearchPanel from '../SearchPanel/Searchpanel';
import Main from '../Main/main';
import Footer from '../footer/foter';


function App() {
  const [darkmode, setDarkmode] = useState(false)
  const [data, setData] = useState(null)
  const [fiterCityData, setFilterCityData] = useState(null)
  const [filterLeftItem, setFilterLeftItem] = useState(null)
  const [search, setSearch] = useState(null)

  const onCahngeTheme = () => {
    setDarkmode(!darkmode)
  }

  const filterCity = (city) => {
    switch (city) {
      case "Qarshi": setFilterCityData(data.filter(item => item.region === "Qarshi"));break;
      case "Koson": setFilterCityData(data.filter(item => item.region === "Koson")); break;
      case "Shahrisabz": setFilterCityData(data.filter(item => item.region === "Shahrisabz"));break;
      case "Yakkabog'": setFilterCityData(data.filter(item => item.region === "Yakkabog'")); break;
      default: setFilterCityData(data);
    }

    filterLeft()
  }

  const filterLeft = (el) => {
    switch (el) {
      case "IT markazlari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "IT"));break;
      case "Abituriyentlarni tayyorlash kurslari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "Abiturient"));break;
      case "Kasb Hunar o'rgatish markazlari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "Service"));break;
      case "Bolalar uchun tayyorlov markazlari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "Kids"));break;
      default: setFilterLeftItem(fiterCityData);
    }
    searchData()
  }

  async function getData() {
    await fetch('https://6440e8a9277c695770cad586--incandescent-belekoy-d804da.netlify.app/db.json')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setFilterCityData(json)
        setFilterLeftItem(json)
        setSearch(json)
      })
      .catch(console.error("Serverda xatolik mavjud!"))
  }

  const searchData = (val) => {
    if(val){
      setSearch(filterLeftItem.filter(item => item?.name?.toLowerCase()?.startsWith(val.toLowerCase())))
    }else{
      setSearch(filterLeftItem)
    }
  }

  useEffect(() => {
    getData()
    filterCity()
  }, [])

  return (
    <div className="App">
      <Header darkmode={darkmode} onCahngeTheme={onCahngeTheme} filterCity={filterCity} />
      <SearchPanel darkmode={darkmode} setSearch={searchData}/>
      <Main darkmode={darkmode} data={search} filterLeft={filterLeft}/>
      <Footer darkmode={darkmode} />
    </div>
  );
}
export default App;
