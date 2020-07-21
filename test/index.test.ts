import remark from 'remark'
import remarkTitle from '../src'

interface Plugin {
	fn: Function
	options: Record<string, any>
}

export function doRemark(input: string, plugins: Plugin[], output: string) {
	let result = remark()
	for (const plugin of plugins) {
		result = result().use(plugin.fn, plugin.options)
	}
	result
		.process(input)
		.then((vfile) => {
			expect(vfile.contents).toBe(output)
		})
		.catch((err) => {
			console.error(err)
		})
}

test('it basically works', () => {
	const input = ''
	const output = '# Baz\n'

	const plugins = [
		{
			fn: remarkTitle,
			options: {
				title: 'Baz',
			},
		},
	]

	doRemark(input, plugins, output)
})

test('it replaces', () => {
	const input = '# Golf\n'
	const output = '# Foxtrot\n'

	const plugins = [
		{
			fn: remarkTitle,
			options: {
				title: 'Foxtrot',
			},
		},
	]

	doRemark(input, plugins, output)
})
