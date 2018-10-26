const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
	console.log(ctx)
	const url = ctx.url
	const request = ctx.request
	const req_query = request.query
	const req_querySting = request.querystring

	ctx.body = {
		url,
		req_query,
		req_querySting
	}
})

app.listen(3000, ()=> {
	console.log('[demo] server is starting at port 3000')
})