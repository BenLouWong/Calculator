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
	margin: 0.5rem 0;
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
	margin: 0.5rem 0;
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

export const MemoryContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	margin-left: 2rem;
	font-size: var(--fontBig);
	height: auto;
	width: 15rem;
	background: rgba(189, 189, 189, 0.87);
	border-radius: 15px;
	padding: 2rem;
`;

export const MemoryItem = styled.div`
	margin: 0.2rem 0;
	width: 100%;
	padding: 0.4rem;
	text-align: center;
`;
