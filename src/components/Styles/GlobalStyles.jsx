import { createGlobalStyle } from "styled-components";

// Typography
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

const GlobalStyles = createGlobalStyle`

:root {
	--green-1: #26643b;
	--green-2: #a2de96;
	--lightGreen-1: #d6e5d8;
	--lightGreen-2: #f5fcf4;
	--black-1: #3b413a;
	--black-2: #3f3c3c;
	--black-3: #5b6359;
	--white-1: #e8e8e8;

	--font-poppins: 'Poppins', sans-serif;
	--font-raleway: 'Raleway' sans-serif;

	--transition: all .3s ease;
}

html {
	font-size: 10px;
	overflow-x: hidden;
	scroll-behavior: smooth;
}
body {
    font-family: var(--font-poppins);
	background: var(--lightGreen-2);
	overflow-x: hidden;
}

ul, ol, li {
	list-style: none;
}

section {
	padding: 100px 0;
}

.btn {
	color: var(--green-1);
	font-family: 'Poppins';
	font-weight: 500;
	border-radius: 8px;
	font-size: 1.4rem;
	padding: 1.2rem 2rem;
	border: none;
}
.primary-btn {
	color: var(--white-1);
	background: var(--green-1);
	padding: 1.2rem 2rem;
}

@media only screen and (min-width: 768px) {
	.btn {
		padding: 1.3rem 2rem;
		font-size: 2rem;
	}
}

@media only screen and (max-width: 767px) {
section {
	padding: 50px 0;
}
}
.container {
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
}

img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
h1, h2, h3 ,h4 {
	font-family: 'Poppins', sans-serif;
}
p {
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
	line-height: 1.4em;
	font-size: 1.8rem;
}
a {
	display: inline-block;
	text-decoration: none;
}

`;

export default GlobalStyles;
