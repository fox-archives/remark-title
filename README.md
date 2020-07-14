# remark-title

[remark](https://github.com/wooorm/remark) plugin to check and inject the title
of a markdown as the first element.

## Usage

Used as a plugin for remark like so:

```js
import remark from "remark";
import remarkTitle from "remark-title";

remark().use(title, { title: "remark-title" }).processSync(readme);
```

This will add a title to your document specified by the `title` option if it does not already exist

For example, the following input markdown:

```markdown
# Bogus Title

Hello World!
```

Would yield:

```markdown
# remark-title

Hello World!
```

### `options.title`

Required. A string for a specified title.

## License

MIT. See [LICENSE](./LICENSE) for details.
