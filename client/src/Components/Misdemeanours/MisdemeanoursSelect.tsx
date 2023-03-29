import React, { useContext } from "react";
import { MisdemeanourKind } from "../../types/misdemeanours.types";


interface filterDataProps {
  filterData: Array<String>;
  setFilterEvent: (value: MisdemeanourKind | "All") => void;
}
const MisdemeanoursSelect:React.FC<filterDataProps> = (props) =>{
   
    return (
      <select
        name="misdemeanoyrsFilter"
        className="misdemeanours__select"
        onChange={(e) => props.setFilterEvent(e.target.value as MisdemeanourKind | "All")}
      >
        <option value="All">All</option>
        <>
          {props.filterData.map((filter) => (
            <option value={filter.toString()}>{filter}</option>
          ))}
        </>
      </select>
    );
}

export default  MisdemeanoursSelect;