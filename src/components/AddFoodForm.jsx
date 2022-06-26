import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = (props) => {
  const [values, setvalues] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFoodDisplay((currentState) => [...currentState, values]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={values.name}
        type="text"
        name="name"
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Image</label>
      <Input
        value={values.image}
        type="text"
        name="image"
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Calories</label>
      <Input
        value={values.calories}
        type="number"
        name="calories"
        min={0}
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Servings</label>
      <Input
        value={values.servings}
        type="number"
        name="servings"
        min={0}
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
