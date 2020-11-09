import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/message'
import Error404 from '../pages/Error404'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
	'/': Home,
	'about': About,
	'message': Message
}

const router = async () => {
	const header = document.getElementById('header')
	const content = null || document.getElementById('content')
	const footer = null || document.getElementById('footer')
	
	header.innerHTML = await Header()

	let hash = getHash()
	let route = await resolveRoutes(hash)
	let render = routes[route] ? routes[route] : Error404
	content.innerHTML = await render() 

	footer.innerHTML = await Footer()
}

export default router