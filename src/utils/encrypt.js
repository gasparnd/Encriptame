//import NEW_LETTER from (./letters)


function encrypt () {

	const text = TEXT_AREA.value.toLowerCase()

	if (checkText(text)) {

		let encrypText = ''
		for (let i = 0; i <= text.length; i++) {

			const inp = Object.keys(NEW_LETTER)
			const out = Object.values(NEW_LETTER)
			const LETTER = text.charAt(i)
			
			if (validator(LETTER, inp)) {
				for (let e = 0; e < inp.length; e++) {
					if (LETTER === inp[e]) {
						encrypText += out[e]
					} 
				}
			} else if (text.charAt(i) === ' ') {
				encrypText += '|'
			} else {
				encrypText += LETTER
			}
			
		}

		swal('Message', encrypText)

	}

}

export default encrypt