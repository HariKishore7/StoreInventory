import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FilterItem from './FilterItem';

import dataJson from '../data/items.json'

function Filter({updateFilters}) {
    const [colors,setColors] = useState([]);
    const [gender, setGender] = useState([]);
    const [price, setPrice] = useState([]);
    const [type, setType] = useState([]);

    useEffect(()=>{
        const colors=[];
        const gender=[];
        const price=[];
        const type=[];
        dataJson.forEach(item=> {
            if(!colors.includes(item.color)){
               colors.push( item.color)
            }
            
            if(!gender.includes(item.gender)){
                gender.push( item.gender)
             }
    
             if(!price.includes(item.price)){
                price.push( item.price)
             }
             
             if(!type.includes(item.type)){
                type.push( item.type)
             }    
        });
        setColors(colors);
        setGender(gender);
        setPrice(price);
        setType(type);
    },[])

  return (
    <>
      <div className="row mb-2"><h6>Colour</h6>
      <FilterItem items={colors} updateFilters={updateFilters} name="color"/>
      </div>
      <div className="row mb-2"><h6>Gender</h6>
      <FilterItem items={gender} updateFilters={updateFilters} name="gender"/>
      </div>
      <div className="row mb-2"><h6>Price</h6>
      <FilterItem items={price} updateFilters={updateFilters} name="price"/>
      </div>
      <div className="row mb-2"><h6>Type</h6>
      <FilterItem items={type} updateFilters={updateFilters} name="type"/>
      </div>
    </>
  )
}

export default Filter