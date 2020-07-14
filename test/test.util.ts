import remark from "remark";

interface Plugin {
  fn: Function;
  options: Record<string, any>;
}
export function doRemark(input: string, plugins: Plugin[], output: string) {
  // @ts-ignore
  let result = remark();
  for (const plugin of plugins) {
    result = result().use(plugin.fn, plugin.options);
  }
  result
    .process(input)
    .then((vfile) => {
      // expect(vfile.contents).toMatchSnapshot();
      expect(vfile.contents).toBe(output);
    })
    .catch((err) => {
      console.error(err);
    });
}
