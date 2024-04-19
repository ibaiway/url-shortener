import { FC } from 'hono/jsx'

export const Footer: FC = () => {
	return (
		<footer class="container">
			<small>
				Built by
				<a href="https://www.linkedin.com/in/ibaialberdi/">Ibai Alberdi</a> •
				<a href="https://github.com/ibaiway/url-shortener">Source code</a>
			</small>
		</footer>
	)
}
