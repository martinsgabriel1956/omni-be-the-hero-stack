import { createGlobalStyle } from "styled-components";
import theme from "../utils/theme";

export const GlobalStyle = createGlobalStyle`
	:root {
			--border-color: #dcdce6;
			--bg-color: #f0f0f5;
	}

	*{
			margin: 0;
			padding: 0;
			outline: 0;
			box-sizing: border-box;
	}

	body{
			font: 400 14px Roboto, sans-serif;
			background: ${props => props.theme && localStorage.getItem('theme') === 'dark' ? `${theme.DarkTheme.bgColor}` : `${theme.LightTheme.bgColor}`};
			-webkit-font-smoothing: antialiased;

			overflow-y: hidden;
	}

	input, button, textarea {
			font: 400 18px Roboto, sans-serif;
	}

	h1, span {
		color: ${props => props.theme && localStorage.getItem('theme') === "dark" ? `${theme.DarkTheme.backLinkColor}` : "#000"};
	}

	button{
			cursor: pointer;
	}

	form input{
		width: 100%;
		height: 60px;
		color: #333333;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		padding: 0 24px;
	}

	form textarea{
		width: 100%;
		resize: vertical;
		min-height: 140px;
		color: #333333;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		padding: 16px 24px;
		line-height: 24px;
	}

	.back-link{
		display: flex;
		align-items: center;
		margin-top: 40px;
		color: ${props => props.theme && localStorage.getItem('theme') === 'dark' ? `${theme.DarkTheme.backLinkColor}` : `${theme.LightTheme.backLinkColor}`};
		font-size: 18px;
		text-decoration: none;
		font-weight: 500;
		transition: opacity 0.2s;
	}

	.back-link svg{
			margin-right: 8px;
	}
	.back-link:hover{
			opacity: 0.8;
	}
`;
