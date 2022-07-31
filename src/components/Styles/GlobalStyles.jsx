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

*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
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
	font-size: 1.6rem;
	padding: 1.2rem 2rem;
	border: none;
	background: var(--lightGreen-1);
	transition: var(--transition);
}

.btn:hover {
	background: var(--green-1);
	color: var(--white-1);
}


.primary-btn {
	color: var(--white-1);
	background: var(--green-1);
	padding: 1.2rem 2rem;
	border-radius: 8px;
	font-size: 1.6rem;
	transition: var(--transition);
}

.primary-btn:hover {
	background: var(--lightGreen-1);
	color: var(--green-1);
}

@media only screen and (max-width: 768px) {
	.primary-btn,
	.btn {
		padding: 1rem 1.7rem;
		font-size: 1.4rem;
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

/* Form Styles */
#form {
	padding: 5rem 0;
}
.form__title {
	font-size: 1.8rem;
	color: var(--black-1);
	font-weight: 600;
}
.form__wrapper {
	padding: 3rem 0;
}
.form__wrapper form {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
}
.form__group label {
	font-size: 1.6rem;
	font-family: Poppins;
	color: var(--black-2);
	font-weight: 500;
}
.form__group input,
.form__group textarea,
.form__group select {
	width: 100%;
	border: none;
	background-color: var(--lightGreen-1);
	font-size: 1.4rem;
	font-family: var(--font-raleway);
	font-weight: 600;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 0.5rem;
	color: var(--black-2);
	outline-color: var(--green-1);
}
.form__group textarea {
	resize: none;
}
.form__wrapper button[type='submit'] {
	width: max-content;
	border: none;
	padding: 1rem 4rem;
	font-weight: 500;
	letter-spacing: 0.1rem;
}
@media only screen and (min-width: 768px) {
	.form__title {
		font-size: 3.6rem;
	}
	.form__wrapper {
		padding: 5rem 0;
	}
	.form__wrapper form {
		grid-template-columns: repeat(2 , 1fr);
	}
	.form__group__full {
		grid-column: 1/3;
	}
	.form__group label {
		font-size: 1.8rem;
	}
	.form__group input,
	.form__group textarea,
	.form__group select {
		font-size: 1.8rem;
		padding: 2rem;
		margin-top: 1.5rem;
		width: 100%;
	}
}
`;

export default GlobalStyles;
