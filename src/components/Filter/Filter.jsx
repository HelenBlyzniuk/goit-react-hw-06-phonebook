import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';
import { filterSet } from 'components/redux/filterSlice';
import { useSelector } from 'react-redux';



export const Filter = () => {
  const dispatch=useDispatch();
  const filterState=useSelector(state=>state.filter)

  const handleChange=(e)=>{
    console.log(e.target.value)
    dispatch(filterSet(e.target.value));
    console.log(e.target.value)
    console.log("filter",filterState)
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


