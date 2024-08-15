import {render,screen} from "@testing-library/react";
import Contactus from "../Contactus";
import "@testing-library/jest-dom";
test("should load contact us component", () => {
    render(<Contactus />);
  
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
  


// test("should load contact us component",() => {
//   render(<Contactus />);




// const heading=  screen.getByRole("heading");
// expect(heading).toBeInTheDocument();
// }
// );