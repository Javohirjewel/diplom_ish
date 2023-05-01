import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header'
import SearchPanel  from '../SearchPanel/Searchpanel';
import Main  from '../Main/main';
import Footer  from '../footer/foter';


function App() {
  const [darkmode, setDarkmode] = useState(false)
  const [data, setData] = useState(null)
  const [text, setText] = useState('')
  const [filter, setFilter] = useState("Barchasi")
  
  const onCahngeTheme = () => {
    setDarkmode(!darkmode)
  }

const inpSearch = (e) => {
  setText(e.target.value)
}

async function getData(){
  await fetch('https://6440e8a9277c695770cad586--incandescent-belekoy-d804da.netlify.app/db.json')
     .then(res => res.json())
     .then(setData)
 }

const searchData = () => {
  if(text === ''){
    return getFilter()
  }else{
    return getFilter().filter(el => el.name.toLowerCase().includes(text.toLowerCase()))
  }
  
}

useEffect(() => {
  getData()
  searchData()
}, [])


const getFilter = () =>{
  console.log(searchData)
  switch (filter) {
    case "Koson": return data.filter(el => el.region === 'Koson'); 
    case "Qarshi": return data.filter(el => el.region === 'Qarshi'); 
    case "Shahrisabz": return data.filter(el => el.region === 'Shahrisabz'); 
    case "Yakkabog'": return data.filter(el => el.region === "Yakkabog'");
    default: return data;
  }
}


const getDirfilter = (filter) =>{
  console.log(filter)
  switch (filter) {
    case "IT markazlari": return getFilter().filter(el => el.direction === 'IT'); 
    case "Abituriyentlarni tayyorlash kurslari": return getFilter().filter(el => el.direction === 'Abituriyent'); 
    case "Kasb Hunar o'rgatish markazlari": return getFilter().filter(el => el.direction === 'Service'); 
    case "Bolalar uchun tayyorlov kurslari": return getFilter().filter(el => el.direction === "Kids'");
    default: return data;
  }
}
const setFilterData = (select) => {
  setFilter(select)
}
// getDirfilter()
getFilter()

  return (
    <div className="App">
       <Header darkmode = {darkmode} onCahngeTheme = {onCahngeTheme} setFilterData={setFilterData}/>
       <SearchPanel darkmode = {darkmode} inpSearch = {inpSearch} text = {text} setText = {setText} />
       <Main darkmode = {darkmode} Filter = {getFilter} />
       <Footer/>
    </div>
  );
}
export default App;
