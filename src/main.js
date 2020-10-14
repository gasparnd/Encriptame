
const TEXT_AREA = document.getElementById('textArea')
const BTN_ENCRYPT = document.getElementById('encryptButton')
const BTN_DECRYPT = document.getElementById('decryptButton')

BTN_ENCRYPT.addEventListener('click', encrypt)
BTN_DECRYPT.addEventListener('click', decrypt)


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


const validator = (char, inp) => {
	for (let i = 0; i<inp.length; i++) {
		if (char === inp[i])  {
			return true
		} 
	}
}

const checkText = text =>  text.length > 0