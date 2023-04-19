import { useEffect, useState, createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import {MisDataContext} from "./MisdemeanoursContext";
import MisdemeanoursList from "./MisdemeanoursList";
import MisdemeanoursSelect from "./MisdemeanoursSelect";

const Misdemeanours: React.FC = () => {
  
  const [filterData, setFilter] = useState<Array<String>>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [misdemeanourData, setMisdemeanourData] = useState<Array<Misdemeanour>>([]);
  const getMisdemeanours = async () => {
    try {
      const apiResponse = await fetch(
        "http://localhost:8080/api/misdemeanours/10"
      );
      if (apiResponse.ok) {
        const json = await apiResponse.json();
        setFilter(getFilterData(json.misdemeanours));
        setMisdemeanourData(json.misdemeanours);
      } else {
        throw new Error();
      }
    } catch (error) {}
  };

  const getFilterData = (data: Array<any>) => {
    const misdemeanourArray = data.map((citizen) => citizen.misdemeanour); 
    return misdemeanourArray.filter((el, idx) => misdemeanourArray.indexOf(el) === idx);
  };

  useEffect(() => {
    getMisdemeanours();
  }, []);

 

  return (
    <MisDataContext.Provider value={misdemeanourData}>
      <section>
        <MisdemeanoursSelect
          filterData={filterData}
          setFilterEvent={setSelectedFilter}
        ></MisdemeanoursSelect>
        <table className="misdemeanours__table">
          <thead>
            <tr>
              <th>Citizen ID</th>
              <th>Date</th>
              <th>Misdemeanours</th>
              <th>Punishment Idea</th>
            </tr>
          </thead>
          <tbody>
            {selectedFilter !== "All"
              ? misdemeanourData
                  .filter((mis) => mis.misdemeanour.includes(selectedFilter))
                  .map((el) => (
                    <MisdemeanoursList
                      citizenId={el.citizenId}
                      date={el.date}
                      misdemeanour={el.misdemeanour}
                      key={el.citizenId}
                    ></MisdemeanoursList>
                  ))
              : misdemeanourData.map((el) => (
                  <MisdemeanoursList
                    citizenId={el.citizenId}
                    date={el.date}
                    misdemeanour={el.misdemeanour}
                    key={el.citizenId}
                  ></MisdemeanoursList>
                ))}
          </tbody>
        </table>
      </section>
    </MisDataContext.Provider>
  );
};

export default Misdemeanours;
