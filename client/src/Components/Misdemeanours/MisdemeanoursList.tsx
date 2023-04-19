import { Misdemeanour } from "../../types/misdemeanours.types";

const MisdemeanoursList: React.FC<Misdemeanour> = (props) => {
  const imageUrl = "https://picsum.photos/40/40?"+ props.citizenId;
  return (
    <tr key={props.citizenId}>
      <td>{props.citizenId}</td>
      <td>{props.date}</td>
      <td>{props.misdemeanour}</td>
      <td>
        <img src={imageUrl}/>
      </td>
    </tr>
  );
 
};
  

export default MisdemeanoursList