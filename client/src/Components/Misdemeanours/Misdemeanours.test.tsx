import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { json } from "stream/consumers";
import { vi } from "vitest";
import Misdemeanours from "./Misdemeanours";



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
    //return res(ctx.json({ "citizenId": 7411,"date":"30/03/2023","misdemeanour":"lift" }));
      return res(
        ctx.json({
          misdemeanours: [
            {
              citizenId: 24659,
              misdemeanour: "lift",
              date: "4/18/2023",
            },
          ],
        })
      );
  }));

  
  console.log(misData);
  render(
    
      <Misdemeanours />
    
  );

  const misType = await screen.findByText("24659");
  console.log(misType);
  expect(misType).toBeInTheDocument();
});
