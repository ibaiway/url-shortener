import { useState, type FC, useEffect } from 'hono/jsx'
import { Footer } from './components/footer'
import { Header } from './components/header'

export const App: FC = () => {
	const [isValidUrl, setIsValidUrl] = useState(undefined)
	const [url, setUrl] = useState('')

	function handleUrlChange(event: Event) {
		const target = event.target as HTMLInputElement
		const url = target.value
		setUrl(url)
	}

	useEffect(() => {
		const urlInput = document.getElementById('urlinput')
		const urlPattern = new RegExp(
			'^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?$'
		)
		const isValidUrl = urlPattern.test(url)
		urlInput?.setAttribute('aria-invalid', (!isValidUrl).toString())
	}, [url])

	function sendData(event: Event) {
		event.preventDefault()
		console.log('Sending data:', url)
		// Add your logic to send data here
	}

	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="color-scheme" content="light dark" />
				<title>URL Shortener by Ibai</title>
				<meta name="description" content="A Simple URL Shortener" />

				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.min.css"
				/>
			</head>

			<body>
				<Header />

				<main class="container">
					<section id="preview">
						<div class="grid" style="text-align: center">
							<form>
								<input
									type="url"
									id="urlinput"
									name="url"
									placeholder="https://example.com"
									onInput="validateUrl"
								/>

								<input
									style="width: 40%"
									id="submit-button"
									type="submit"
									value="Make it short"
									onClick="sendData"
								/>
							</form>
						</div>
					</section>

					<section id="loading">
						<h2>Loading</h2>
						<article aria-busy="true"></article>
					</section>
				</main>
				<Footer />

				<script src="static/minimal-theme-switcher.js"></script>
				<script src="static/index.js"></script>
			</body>
		</html>
	)
}
