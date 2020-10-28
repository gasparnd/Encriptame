import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/message'
import Header from '../templates/Header'
import Footer from '../templates/Footer'

const routes = {
	'/': Home,
	'About': About,
	'Message': Message
}

const router = async () => {
	const header = document.getElementById('header')
	const content = null || document.getElementById('content')
	const footer = null || document.getElementById('footer')
	
	header.innerHTML = await Header()
	footer.innerHTML = await Footer()
	content.innerHTML = await Home()
}

export default router