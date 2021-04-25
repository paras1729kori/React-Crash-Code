import React from 'react'
import './App.css';

// Custom Component
import Counter from './components/Counter/Counter'
import SearchBar from './components/SearhBar/SearchBar'
import Button from './components/Button/Button'
import Test from './components/Test/Test'

// useContext
import { MyContext } from './MyContext'

const students = [
  "SE_B_Mazhar_Khokhawala", "SE_B_Jai_Shah", "SE_B_Hiral_Shah",
  "SE_B_Sarvesh_Soni","SE_B_Paras_Kori", "SE_B_Hitesh_Prajapati",
  "TE_Prince_Gada","TE_Wahab_Shaikh","TE_Aziz_Bohra","TE_Vaibhav_Lakhani"
]

const App = () => {
  const [value, setValue] = React.useState('starting value')

  // Loading thingy
  const [productState, setProductState] = React.useState([])
  React.useEffect(() => {
    setTimeout(() => {
      setProductState([
        "tooth paste",
        "tooth brush",
        "mouth wash",
        "dental floss",
        "mouth gaurd"
      ])
    }, 2000)
  },[])

  return (
    <MyContext.Provider value={{value, setValue}}>
    <div className="App">
      <h1 className="font-weight-bold" >Counter Component</h1>
      <Counter incrementBy={1} bgColor={"blue"} />
      <Counter incrementBy={5} bgColor={"red"} />
      <Counter incrementBy={7} bgColor={"green"} />

      <hr />

      <h1 className="font-weight-bold" >SeachBar Component</h1>
      {/* loading object comes before displaying the list */}
      {productState.length > 0 ? <SearchBar list_item={productState}/> : <h1>Loading ....</h1>}
      
      <SearchBar list_item={students}/>

      <hr />

      <h1 className="font-weight-bold">useContext Hook</h1>
      <Test />

      <hr />

      <h1 className="font-weight-bold">Children Props</h1>
      <Button>btn1</Button>
      <Button>btn2</Button>
      <Button>btn3</Button>
    </div>
    </MyContext.Provider>
  );
}

export default App;
