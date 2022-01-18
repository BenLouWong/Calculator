import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CalculatorContainer = styled.div`
	width: var(--maxWidth);
	height: auto;
	margin: 0 auto;
	background-color: white;
	box-shadow: var(--boxShadowDefault);
	border-radius: 20px;
	overflow: hidden;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
	grid-gap: 0.1rem;
	background: var(--darkGrey);
	padding: 1rem;
	justify-items: center;
`;

export const ButtonContainer02 = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(5rem, 1fr));
	justify-items: center;
	grid-gap: 0.1rem;
	background: var(--medGrey);
	padding: 1rem;
`;

export const ButtonNumber = styled.input`
	margin: 0.25rem 0;
	border: none;
	background-color: black;
	color: white;
	width: 4rem;
	height: 4rem;
	transition: all 0.3s;
	font-size: 1.5rem;
	border-radius: 50%;

	:hover {
		opacity: 0.7;
	}
`;

export const ButtonOperation = styled.input`
	margin: 0.25rem 0;
	border: none;
	background-color: var(--orangeLight);
	color: black;
	width: 4rem;
	height: 4rem;
	transition: all 0.3s;
	font-size: 1.5rem;
	border-radius: 50%;
	padding: 0.2rem;

	:hover {
		opacity: 0.8;
	}
`;
