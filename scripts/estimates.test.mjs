import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(
  new URL("../src/components/booking/types.ts", import.meta.url),
  "utf8",
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
});
const { faultsTotal } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);
const fault = (price) => ({
  label: "Repair",
  price,
  turnaround: "After diagnosis",
});

test("a price range uses the starting amount instead of joining its digits", () => {
  assert.equal(faultsTotal([fault("£59–£99")]), 59);
});
test("quote-only and mixed repairs do not advertise a zero or incomplete total", () => {
  assert.equal(faultsTotal([fault("Quote")]), null);
  assert.equal(faultsTotal([fault("£79"), fault("Quote")]), null);
  assert.equal(faultsTotal([]), null);
});
test("known starting prices, decimals and currency spacing add correctly", () => {
  assert.equal(faultsTotal([fault("From £79"), fault("£ 39.50")]), 118.5);
});
