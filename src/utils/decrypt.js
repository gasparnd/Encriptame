//import OLD_LETTER from (./letters)

function decrypt () {

	const text = TEXT_AREA.value
	
	if (checkText(text)) {

		let decrypText = ''

		for (let i = 0; i <= text.length; i++) {

			const inp = Object.keys(OLD_LETTER)
			const out = Object.values(OLD_LETTER)
			const LETTER = text.charAt(i)
			
			if (validator(LETTER, inp, out)) {
				for (let e = 0; e < inp.length; e++) {
					if (LETTER === inp[e]) {
						decrypText += out[e]
					} 
				}
			} else if (text.charAt(i) === '|') {
				decrypText += ' '
			} else {
				decrypText += LETTER
			}

		} 

		swal('Message', decrypText)
	}
}

export default decrypt