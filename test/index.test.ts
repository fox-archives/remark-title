import remarkTitle from "../src";
import { doRemark } from "./test.util";

test("it basically works", () => {
  const input = "";
  const output = "# Baz\n";

  const plugins = [
    {
      fn: remarkTitle,
      options: {
        title: "Baz",
      },
    },
  ];

  doRemark(input, plugins, output);
});

test("it replaces", () => {
  const input = "# Golf\n";
  const output = "# Foxtrot\n";

  const plugins = [
    {
      fn: remarkTitle,
      options: {
        title: "Foxtrot",
      },
    },
  ];

  doRemark(input, plugins, output);
});
