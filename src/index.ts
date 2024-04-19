import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()
app.use(logger())

app.get('/', serveStatic({ root: './static' }))
app.use('/static/*', serveStatic({ root: './' }))

app.post('/slug', (c) => {
	const { url } = c.req.body()
	if (!url) {
		return c.json({ error: 'No slug provided' }, 400)
	}
	return c.json({ url: url.toLowerCase() })
})

app.get('/:id', (c) => {
	const id = c.req.param('id')
	console.log(id)
	if (!id) {
		console.log('redirecting1')
		return c.redirect('/', 301)
	}
	if (id?.length > 10 || id?.length < 3) {
		console.log('redirecting2')
		return c.redirect('/', 301)
	}
	console.log('returning')
	return c.text(`You want see ${id}`)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
	fetch: app.fetch,
	port,
})
