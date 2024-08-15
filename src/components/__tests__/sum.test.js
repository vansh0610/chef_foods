import { sum } from "../sum"

// it takes two argument (1. string and 2. call back function)
test("sum fun should calc the sum of two no",() => {
  const result=  sum(3,4);
  expect(result).toBe(7);
}
)