import { FC } from 'hono/jsx'

export const Header: FC = () => {
	return (
		<header class="container">
			<nav>
				<ul>
					<li>
						<details class="dropdown">
							<summary role="button" class="secondary">
								Theme
							</summary>
							<ul>
								<li>
									<a href="#" data-theme-switcher="auto">
										Auto
									</a>
								</li>
								<li>
									<a href="#" data-theme-switcher="light">
										Light
									</a>
								</li>
								<li>
									<a href="#" data-theme-switcher="dark">
										Dark
									</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</nav>
			<hgroup style="text-align: center">
				<h1>URL Shortener</h1>
				<p>Shorten URLs with the click of a button</p>
			</hgroup>
		</header>
	)
}
