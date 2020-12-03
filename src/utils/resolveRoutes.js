const resolveRoutes = route => {
	if(route) {
		return route // Home (/), Aboute (aboute), Message (message)
	}

	return `#/${route}`
}

export default resolveRoutes