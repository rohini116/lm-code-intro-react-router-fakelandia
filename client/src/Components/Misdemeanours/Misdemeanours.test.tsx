import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { json } from "stream/consumers";
import Misdemeanours from "./Misdemeanours";
import { MisDataContext } from "./MisdemeanoursContext";

const GET_MISDEMEANOURS = "http://localhost:8080/api/misdemeanours/10";
const server = setupServer(
  rest.get(GET_MISDEMEANOURS, (req, res, ctx) => {
    return res(ctx.json({ "citizenId": 7411,"date":"30/03/2023","misdemeanour":"lift" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays first character", async () => {
  const misData = server.use(
  rest.get(GET_MISDEMEANOURS, (req, res, ctx) => {
    return res(ctx.json({ "citizenId": 7411,"date":"30/03/2023","misdemeanour":"lift" }));
  }));
  console.log(misData);
  render(
    
      <Misdemeanours />
    
  );

  const misType = await screen.findByText("lift");
  expect(misType).toBeInTheDocument();
});
