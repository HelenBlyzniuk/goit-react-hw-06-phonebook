import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';
import { filterSet } from 'components/redux/filterSlice';




export const Filter = () => {
  const dispatch=useDispatch();
  

  const handleChange=(e)=>{
   
    dispatch(filterSet(e.target.value));
      
  }
  
  return (
    <FilterContainer>
      Find contact by name
      <FilterInput
        type="text"
        placeholder="...name"
        onChange={handleChange}
      />
    </FilterContainer>
  );
};


