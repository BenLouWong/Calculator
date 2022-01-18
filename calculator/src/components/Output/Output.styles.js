import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: var(--maxWidth);
	padding: 1rem 2rem;
	background: rgba(189, 189, 189, 0.57);
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-direction: column;
`;

export const Previous = styled.div`
    height: auto;
    width: auto;
    color: var(--medGrey)
    font-size: var(--fontMed); 
`;

export const Current = styled.div`
	height: auto;
	width: auto;
	color: black;
	font-size: var(--fontVeryBig);
`;
