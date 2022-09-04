import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Filter from '../components/Filter';
import Search from '../components/Search';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';

export function Store() {

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  // const [searchField, setSearchField] = useState('')

  useEffect(()=>{
    updateProducts(filters);
  },[filters])

  //search
  const searchHandler = (e) => {
    // setSearchField(e.target.value.toLocaleLowerCase());
    const filteredItems = products.filter((product) => {
      return product.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
    });
    setFilterProducts(filteredItems);
  };
  
  const updateProducts = (filters)=>{
    console.log(filters.length)
    if(filters.length>0){
      // console.log(filters)
      filters.forEach((filter)=>{
        let list=[];
        // console.log("Switch")
        switch(filter.name){
          case 'color':
            setFilterProducts(products.filter(product => product.color === filter.value))
            // console.log("Color")
            break;
          case 'gender':
            // list =  products.filter(product => product.gender === filter.value)
            // setFilterProducts(filteredProducts=>{
            //   return(
            //     [...filteredProducts,list]
            //   )
            // })
            setFilterProducts(products.filter(product => product.gender === filter.value))
            break;
          case 'price':
            // console.log('price')
            setFilterProducts(products.filter(product => product.price === filter.value))
            break;
          case 'type':
            setFilterProducts(products.filter(product => product.type === filter.value))
            break;
          default:
            setFilterProducts(products)
         }
      })
    }
    else{
      setFilterProducts(products);
    }
  }


  const updateFilters = (value, name, checked)=>{
    // console.log("Update filters");
    if(checked){
      setFilters([...filters, {value, name}])
    }
    else{
      setFilters(current =>
        current.filter(obj => {
          return obj.value !== value;
        }),
      );
    }
    // console.log(filters);
  }

  useEffect(()=>{
    updateProducts(filters);
  },[products])

  useEffect(()=>{
     setProducts(storeItems);
  },[])
  return (
    <>
      <h1>Store</h1>
      <div className="row justify-content-center">
        <div className="col-md-4 col-xs-12">
          <Search onChangeHandler={searchHandler} />
        </div>
      </div>
      <div className="row">
      <div className="col-md-2" >
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> */}
        <Filter updateFilters={updateFilters}/></div>
        {/* </div> */}
      <div className="col">
        <div className="row g-3 row-xs-1 row-lg-3">
            {filterProducts?.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
                <StoreItem {...item}/>
            </div>
            ))}
        </div>
      </div>
      </div>      
    </>
  );
}