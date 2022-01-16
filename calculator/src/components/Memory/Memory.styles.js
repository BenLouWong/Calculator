import styled from "styled-components";

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

export const MemoryClear = styled.button`
	margin-top: 1rem;
	border: solid 2px var(--medGrey);
	background-color: transparent;
	border-radius: 15px;
	padding: 0.5rem;
	font-size: var(--fontSmall);
	transition: 0.2s all ease;
	cursor: pointer;

	:hover {
		background-color: var(--darkGrey);
		color: white;
	}
`;

export const Spinner = styled.div`
	border: 5px solid var(--lightGrey);
	border-top: 5px solid var(--medGrey);
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: spin 0.8s linear infinite;
	margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    
`;
