
const TEXT_AREA = document.getElementById('textArea')
const BTN_ENCRYPT = document.getElementById('encryptButton')
const BTN_DECRYPT = document.getElementById('decryptButton')

BTN_ENCRYPT.addEventListener('click', encrypt)
BTN_DECRYPT.addEventListener('click', decrypt)

const LIMIT_CHARACTERS = 144

function encrypt () {

	const text = TEXT_AREA.value.toLowerCase()
	
	


	if (checkText(text)) {

		let encrypText = ''
		for (let i = 0; i <= text.length; i++) {

			switch (text.charAt(i)) {

				case 'a':
					encrypText += NEW_LETTER.a
				break
				case 'b':
					encrypText += NEW_LETTER.b
				break
				case 'c':
					encrypText += NEW_LETTER.c
				break
				case 'd':
					encrypText += NEW_LETTER.d
				break
				case 'e':
					encrypText += NEW_LETTER.e
				break
				case 'f':
					encrypText += NEW_LETTER.f
				break
				case 'g':
					encrypText += NEW_LETTER.g
				break
				case 'h':
					encrypText += NEW_LETTER.h
				break
				case 'i':
					encrypText += NEW_LETTER.i
				break
				case 'j':
					encrypText += NEW_LETTER.j
				break
				case 'k':
					encrypText += NEW_LETTER.k
				break
				case 'l':
					encrypText += NEW_LETTER.l
				break
				case 'm':
					encrypText += NEW_LETTER.m
				break
				case 'n':
					encrypText += NEW_LETTER.n
				break
				case 'o':
					encrypText += NEW_LETTER.o
				break
				case 'p':
					encrypText += NEW_LETTER.p
				break
				case 'q':
					encrypText += NEW_LETTER.q
				break
				case 'r':
					encrypText += NEW_LETTER.r
				break
				case 's':
					encrypText += NEW_LETTER.s
				break
				case 't':
					encrypText += NEW_LETTER.t
				break
				case 'u':
					encrypText += NEW_LETTER.u
				break
				case 'v':
					encrypText += NEW_LETTER.v
				break
				case 'w':
					encrypText += NEW_LETTER.w
				break
				case 'x':
					encrypText += NEW_LETTER.x
				break
				case 'y':
					encrypText += NEW_LETTER.y
				break
				case 'z':
					encrypText += NEW_LETTER.z
				break
				case '¿':
					encrypText += NEW_LETTER.interrogant
				break
				case '?':
					encrypText += NEW_LETTER.interrogant2
				break
				case '¡':
					encrypText += NEW_LETTER.exclamation
				break
				case '!':
					encrypText += NEW_LETTER.exclamation2
				break
				case ',':
					encrypText += NEW_LETTER.comma
				break
				case 'z':
					encrypText += NEW_LETTER.z
				break
				case '(':
					encrypText += NEW_LETTER.parenthesis
				break
				case ')':
					encrypText += NEW_LETTER.parenthesis2
				break
				case ' ':
					encrypText += '|'
				break
				default:
					encrypText += text.charAt(i)
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

			switch (text.charAt(i)) {

				case 'r':
					decrypText += OLD_LETTER.r
				break
				case 'I':
					decrypText += OLD_LETTER.I
				break
				case 'z':
					decrypText += OLD_LETTER.z
				break
				case 'O':
					decrypText += OLD_LETTER.O
				break
				case 'y':
					decrypText += OLD_LETTER.y
				break
				case 'P':
					decrypText += OLD_LETTER.P
				break
				case 'd':
					decrypText += OLD_LETTER.d
				break
				case 'M':
					decrypText += OLD_LETTER.M
				break
				case 'U':
					decrypText += OLD_LETTER.U
				break
				case 'p':
					decrypText += OLD_LETTER.p
				break
				case 'R':
					decrypText += OLD_LETTER.R
				break
				case 'o':
					decrypText += OLD_LETTER.o
				break
				case 'q':
					decrypText += OLD_LETTER.q
				break
				case 't':
					decrypText += OLD_LETTER.t
				break
				case 'f':
					decrypText += OLD_LETTER.f
				break
				case 'l':
					decrypText += OLD_LETTER.l
				break
				case 'b':
					decrypText += OLD_LETTER.b
				break
				case 'W':
					decrypText += OLD_LETTER.W
				break
				case 'm':
					decrypText += OLD_LETTER.m
				break
				case 'i':
					decrypText += OLD_LETTER.i
				break
				case 'C':
					decrypText += OLD_LETTER.C
				break
				case 'G':
					decrypText += OLD_LETTER.G
				break
				case 'L':
					decrypText += OLD_LETTER.L
				break
				case 'j':
					decrypText += OLD_LETTER.j
				break
				case 'u':
					decrypText += OLD_LETTER.u
				break
				case 'h':
					decrypText += OLD_LETTER.h
				break
				case 'D':
					decrypText += OLD_LETTER.D
				break
				case 'A':
					decrypText += OLD_LETTER.A
				break
				case 'F':
					decrypText += OLD_LETTER.F
				break
				case 'Q':
					decrypText += OLD_LETTER.Q
				break
				case 'e':
					decrypText += OLD_LETTER.e
				break
				case 'N':
					decrypText += OLD_LETTER.N
				break
				case 'H':
					decrypText += OLD_LETTER.H
				break
				case '|':
					decrypText += ' '
				break
				default:
					decrypText += text.charAt(i) 
			}
		} 

		swal('Message', decrypText)
	}
}

const checkText = text => {

	if (text.length > 0 & text.length <= LIMIT_CHARACTERS) {
		return true
	}
}