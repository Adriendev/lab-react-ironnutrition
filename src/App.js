import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { useState } from 'react';
import { Button, Divider, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodDisplay, setFoodDisplay] = useState(foods);
  const [search, setSearch] = useState('');

  const foodToDisplay = foodDisplay.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  const deleteFood = (name) => {
    const keepFood = foodDisplay.filter((food) => food.name !== name);
    setFoodDisplay(keepFood);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>
      <AddFoodForm setFoodDisplay={setFoodDisplay} />

      {/* Display Search component here */}
      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodToDisplay.map((food) => {
          console.log(food);
          return <FoodBox key={food.image} {...food} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
