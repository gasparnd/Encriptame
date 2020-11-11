import Home from '../pages/Home'
import About from '../pages/About'
import Error404 from '../pages/Error404'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import message from '../utils/message'
import showMessage from '../utils/showMessage'

const routes = {
	'/': Home,
	'about': About,
}

const router = async () => {
	const header = document.getElementById('header')
	const content = null || document.getElementById('content')
	const footer = null || document.getElementById('footer')
	const TEXT_AREA = null || document.getElementById('textArea')
	
	header.innerHTML = await Header()

	let hash = getHash()
	let route = await resolveRoutes(hash)
	let render = routes[route] ? routes[route] : Error404
	content.innerHTML = await render() 

	footer.innerHTML = await Footer()

	const BTN_ENCRYPT = null || document.getElementById('encryptButton')
	const BTN_DECRYPT = null || document.getElementById('decryptButton')
	const MessageContainer = null || document.getElementById('Message')
	if (route === '/') {
		BTN_ENCRYPT.addEventListener('click', showMessage)
		BTN_DECRYPT.addEventListener('click', showMessage)
	}
}

export default router