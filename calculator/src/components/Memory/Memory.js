import React from "react";
import {
	MemoryContainer,
	MemoryItem,
	MemoryClear,
	Spinner,
} from "./Memory.styles";
import { useState, useEffect } from "react";

export default function Memory(props) {
	const [clear, setClear] = useState(false);

	const memoryHandler = props.data.map((el, i) => (
		<MemoryItem>
			{i + 1}. {el}
		</MemoryItem>
	));

	useEffect(() => {
		const timer = setTimeout(() => {
			setClear(false);
		}, 4000);

		return () => {
			clearTimeout(timer);
		};
	}, [clear]);

	const memoryClear = () => {
		props.onClear([]);
		setClear(true);
	};

	return (
		<MemoryContainer>
			<div className="History">History</div>
			{clear ? <Spinner></Spinner> : memoryHandler}
			{/* {memoryHandler}
			<Spinner></Spinner> */}
			<MemoryClear onClick={memoryClear}>Clear History</MemoryClear>
		</MemoryContainer>
	);
}
