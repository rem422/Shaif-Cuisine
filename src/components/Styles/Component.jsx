import { createGlobalStyle } from "styled-components";

const ComponentStyles = createGlobalStyle`

/* Global Button Styles */


/* End Global Button Styles */

/* Store info section styles*/
.storeInfo__wrapper {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
}
.storeInfo__item {
	background-color: var(--lightGreen-1);
	padding: 20px 30px;
	text-align: center;
	text-align: center;
	border-radius: 12px;
	width: 150px;
}
.storeInfo__icon {
	width: 30px;
	margin: 0 auto;
	margin-bottom: 1.5rem;
}
.storeInfo__title {
	font-size: 1.4rem;
	font-family: Poppins;
	font-weight: 500;
	margin-bottom: 0.5rem;
	color: var(--black-1);
}
.storeInfo__text {
	font-size: 1.4rem;
	font-family: Raleway;
	color: var(--black-2);
}
@media only screen and (min-width: 768px) {
	.storeInfo__wrapper {
		gap: 2rem;
	}
	.storeInfo__item {
		min-width: 200px;
		padding: 40px 0;
	}
	.storeInfo__icon {
		width: 47px;
		margin-bottom: 2.5rem;
	}
	.storeInfo__title {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
	.storeInfo__text {
		font-size: 1.6rem;
	}
}

/* Dishes Grid */
.dishGrid__title {
	font-size: 1.8rem;
	margin-bottom: 2rem;
	font-weight: 600;
	color: var(--black-1);
}
.dishGrid__wrapper {
	display: grid;
	/* grid-template-columns: repeat(autofit, minmax(140px, 1fr)); */
	grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	gap: 1rem;
}
.dishGrid__item {
	display: flex;
	flex-direction: column;
	background-color: var(--lightGreen-1);
	padding: 0.5rem;
	border-radius: 8px;
	gap: 0.5rem;
}
.dishGrid__item__img {
	flex: 4;
}
.dishGrid__item__info {
	flex: 5;
}
.dishGrid__item__img img {
	object-fit: cover;
	border-radius: 12px;
}
.dishGrid__item__title {
	font-size: 1.4rem;
	line-height: 1.3em;
	font-weight: 500;
	color: var(--black-1);
	margin-bottom: 0.5rem;
}
.dishGrid__item__price {
	font-size: 1.4rem;
	color: var(--green-1);
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.dishGrid__item__stars {
	max-height: 15px;
	width: max-content;
}
@media only screen and (min-width: 768px) {
	.dishGrid__title {
		font-size: 2.4rem;
	}
	.dishGrid__wrapper {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 3rem;
	}
	.dishGrid__item {
		flex-direction: row;
		padding: 1.5rem;
		border-radius: 12px;
		gap: 1rem;
	}
	.dishGrid__item__title {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}
	.dishGrid__item__price {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
}
/* Dishes Grid */

/* Footer Styles */
footer {
	background: var(--lightGreen-1);
	padding-top: 5rem;
	padding-bottom: 2rem;
}
.footer__wrapper {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}
.footer__logo {
	width: 150px;
	margin-bottom: 2rem;
}
.footer__desc {
	font-size: 1.4rem;
	color: var(--black-2);
	margin-bottom: 2rem;
}
.footer__socials__title {
	font-size: 1.8rem;
	color: var(--black-1);
	margin-bottom: 1rem;
}
.footer__socials li {
	display: inline-block;
	margin-right: 0.5rem;
}
.footer__socials a {
	padding: 0.5rem 0.8rem;
	background-color: var(--white-1);
	border: 1px solid var(--green-2);
	border-radius: 8px;
}
.footer__socials svg {
	width: 20px;
	color: var(--black-2);
}
.footer__text__title {
	font-size: 1.8rem;
	margin-bottom: 1rem;
	color: var(--black-1);
	font-weight: 600;
}
.footer__text a {
	font-size: 1.4rem;
	margin-bottom: 0.5rem;
	color: var(--black-2);
	font-family: Raleway;
	font-weight: 500;
	line-height: 1.4em;
}
@media only screen and (min-width: 768px) {
	footer {
		padding-top: 8rem;
		padding-bottom: 4rem;
	}
	.footer__wrapper {
		flex-direction: row;
	}
	.footer__col1 {
		flex: 4;
	}
	.footer__col2,
	.footer__col3,
	.footer__col4 {
		flex: 2;
	}
	.footer__desc {
		max-width: 300px;
		font-size: 1.8rem;
		margin-bottom: 2.5rem;
	}
	.footer__socials__title {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	.footer__text__title {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	.footer__text a {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
}
#copyright {
	padding: 1rem 0;
}
.copyright__text {
	font-size: 1.4rem;
	text-align: center;
}
@media only screen and (min-width: 768px) {
	.copyright__text {
		font-size: 1.6rem;
		text-align: left;
	}
}
/* End Footer Styles */



`;

export default ComponentStyles;
