import path from 'path'
import assert from 'assert'

interface IRemarkTitleOptions {
	title: string
}

export default function checkTitle(options: IRemarkTitleOptions) {
	assert(options.title)

	return function checkTitleTransformer(ast: any, file: any) {
		let firstNode = ast.children?.[0]
		const newHeading = {
			type: 'heading',
			depth: 1,
			children: [{ type: 'text', value: options.title }],
		}

		// if the first element is not a heading, add it
		if (firstNode && firstNode.type === 'heading') {
			const text = firstNode.children?.[0].value

			// only replace if the current text does not match
			if (text !== options.title) {
				ast.children[0] = newHeading
			}

			return
		}

		ast.children.unshift(newHeading)
	}
}
