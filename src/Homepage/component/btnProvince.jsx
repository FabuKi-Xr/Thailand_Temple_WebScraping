import React,{useState} from 'react'
import BtnCard from './btnCard'

function BtnProvince(props) {
  const {isChecked, setIsChecked} =props
  const tname = ["กระบี่", "กาญจนบุรี", "นครราชสีมา", "อุดรธานี", "เชียงใหม่"];

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsChecked([...isChecked, id]);
    if (!checked) {
      setIsChecked(isChecked.filter((item) => item !== id));
    }
   
  };

  const Provinces = tname.map((item, n) => {
    return (
      <BtnCard label={item} key={n} checked={isChecked.includes(item)} onChange={handleClick}/>
    );
  });
 
  return (
    <div className=''>
        {Provinces}
   
    </div>
  )
}

export default BtnProvince