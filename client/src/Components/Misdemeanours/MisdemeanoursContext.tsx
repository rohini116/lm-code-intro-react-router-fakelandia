import { createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";

export const MisDataContext = createContext<Array<Misdemeanour>>([]);


