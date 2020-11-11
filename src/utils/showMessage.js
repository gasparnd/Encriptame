import message from './message'

const showMessage = async (ev) => {
	const action = ev.target.dataset.type
	const TEXT_AREA = null || document.getElementById('textArea')
	const MessageContainer = null || document.getElementById('Message-container')
	const Message = await message(action, TEXT_AREA)
	MessageContainer.innerHTML = `
		<h2>Your Message is:</h2>
		<p>${Message}</p>
	`
}

export default showMessage