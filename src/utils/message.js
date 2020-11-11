import LETTERS from './letters'

const message = (action, TEXT_AREA) => {
	const text = TEXT_AREA.value
	const redirect = (action === 'encrypt') ? encrypt(TEXT_AREA) : decrypt(text)
	return redirect
}

const encrypt = (TEXT_AREA) => {

	const text = TEXT_AREA.value.toLowerCase()
	let newMessage = ''

	if (checkText(text)) {
		for (let i = 0; i <= text.length; i++) {

			const inp = Object.keys(LETTERS)
			const out = Object.values(LETTERS)
			const LETTER = text.charAt(i)
			if (validator(LETTER, inp, out)) {
				for (let e = 0; e < inp.length; e++) {
					if (LETTER === inp[e]) {
						newMessage += out[e]
					} 
				}
			} else if (text.charAt(i) === ' ') {
				newMessage += '|'
			} else {
				newMessage += LETTER
			}
		}
	}

	return newMessage
}

const decrypt = (text) => {

	let newMessage = ''
	if (checkText(text)) {

		for (let i = 0; i <= text.length; i++) {

			const inp = Object.values(LETTERS)
			const out = Object.keys(LETTERS)
			const LETTER = text.charAt(i)
			
			if (validator(LETTER, inp, out)) {
				for (let e = 0; e < inp.length; e++) {
					if (LETTER === inp[e]) {
						newMessage += out[e]
					} 
				}
			} else if (text.charAt(i) === '|') {
				newMessage += ' '
			} else {
				newMessage += LETTER
			}
		} 
	}

	return newMessage
}


const validator = (char, inp) => {
	for (let i = 0; i<inp.length; i++) {
		if (char === inp[i])  {
			return true
		} 
	}
}

const checkText = text =>  text.length > 0

export default message