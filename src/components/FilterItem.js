import React from 'react'
import { Col} from 'react-bootstrap';

function FilterItem({items, name, updateFilters}) {

const filterList=(e)=>{
    updateFilters(e.target.value, e.target.name, e.target.checked);
}

return (
    <>
        {
         items.map((col,i)=>{
            return <div className="col-md-12" key={i}><input type="checkbox" onChange={filterList} value={col} name={name} id={col}/>{col}</div>
        })
      }
    </>
  )
}

export default FilterItem