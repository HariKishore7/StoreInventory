import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    updateProducts(filters);
  }, [filters]);

  //search
  const searchHandler = (e) => {
    const filteredItems = products.filter((product) => {
      return product.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setFilterProducts(filteredItems);
  };

  const updateProducts = (filters) => {
    console.log(filters.length);
    if (filters.length > 0) {
      filters.forEach((filter) => {
        switch (filter.name) {
          case "color":
            setFilterProducts(
              products.filter((product) => product.color === filter.value)
            );
            break;
          case "gender":
            setFilterProducts(
              products.filter((product) => product.gender === filter.value)
            );
            break;
          case "price":
            setFilterProducts(
              products.filter((product) => product.price == filter.value)
            );
            break;
          case "type":
            setFilterProducts(
              products.filter((product) => product.type === filter.value)
            );
            break;
          default:
            setFilterProducts(products);
        }
      });
    } else {
      setFilterProducts(products);
    }
  };

  const updateFilters = (value, name, checked) => {
    if (checked) {
      setFilters([...filters, { value, name }]);
    } else {
      setFilters((current) =>
        current.filter((obj) => {
          return obj.value !== value;
        })
      );
    }
  };

  useEffect(() => {
    updateProducts(filters);
  }, [products]);

  useEffect(() => {
    setProducts(storeItems);
  }, []);

  return (
    <>
      <h1>Store</h1>
      <div className="row justify-content-center">
        <div className="col-md-4 col-xs-12">
          <Search onChangeHandler={searchHandler} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Filter updateFilters={updateFilters} />
        </div>
        <div className="col">
          <div className="row g-3 row-xs-1 row-lg-3">
            {filterProducts?.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <StoreItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
