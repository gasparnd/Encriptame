const resolveRoutes = route => {
	if(route) {
		console.log('ruta ' + route)
		return route // Home (/), Aboute (aboute), Message (message)
	}

	return `/${route}`
}

export default resolveRoutes