const urlInput = document.getElementById('urlinput')
urlInput.addEventListener('input', (event) => {
	validateUrl(event.target.value)
})
const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', (event) => {
	event.preventDefault()
	sendData(event)
})

let debounceTimeout
const DEBOUNCE_TIME = 700 // 0.7 second

function validateUrl(url) {
	clearTimeout(debounceTimeout)
	console.log('validateUrl')

	debounceTimeout = setTimeout(() => {
		const urlInput = document.getElementById('urlinput')
		const urlPattern = new RegExp(
			'^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?$'
		)
		const isValidUrl = urlPattern.test(url)
		urlInput.setAttribute('aria-invalid', !isValidUrl)
	}, DEBOUNCE_TIME)
}

function sendData(event) {
	console.log('sendData')
	const urlInput = document.getElementById('urlinput')
	const url = urlInput.value

	// Make a POST request to the endpoint with the URL data
	fetch('/slug', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ url }),
	})
		.then((response) => response.json())
		.then((data) => {
			// Handle the response data
			console.log(data)
		})
		.catch((error) => {
			// Handle any errors
			console.error(error)
		})
}
