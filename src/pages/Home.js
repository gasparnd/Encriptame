const Home = () => {
	const view = `
		<section class="hero">
			<div class="wrapper">
				<h1>Encrypt your message so that no one sees it</h1>
			</div>
		</section>
		<section class="encypt-wrapperr">
			<div class="wrapper">			
				<h2 class="encrypt-wrapper-title">Place your Message <span>(only 144 characters)</span></h2>
				<div class="encrypt">
					<textarea maxlength="144" id="textArea" placeholder="Write your Message/Paste a Message"></textarea>			
					<div class="buttons">
						<button class="button encrypt"  id="encryptButton" data-type="encrypt">Encrypt</button>
						<button class="button decrypt" id="decryptButton" data-type="decrypt">Decrypt</button>
					</div>
				</div>			
			</div>		
		</section>
		<section class="Message" id="Message-container">
		
		</section>
	`
	return view
}

export default Home