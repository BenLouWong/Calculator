import Output from "./components/Output/Output";
import {
	CalculatorContainer,
	ButtonContainer,
	ButtonContainer02,
	ButtonNumber,
	ButtonOperation,
	Wrapper,
} from "./App.styles";
import { useState } from "react";
import Memory from "./components/Memory/Memory";

const generateNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const generateFunctions = ["/", "*", "-", "+"];

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");
	const [memory, setMemory] = useState([]);
	const ops = ["/", "*", "-", "+", "."];

	const calcHandler = (el) => {
		if (
			(ops.includes(el.target.value) &&
				el.target.value === calc.slice(-1)) ||
			(calc === "" && ops.includes(el.target.value))
		)
			return;

		setCalc(calc + el.target.value);

		let outcome = Function("return " + (calc + el.target.value))();
		setResult(outcome);
	};

	const clearLastHandler = () => {
		setCalc(calc.slice(0, -1));
	};

	const resultHandler = () => {
		setCalc(result.toFixed(2).toString());
		prevMemoryDataHandler(result.toFixed(2).toString());
	};

	const resetDataHandler = () => {
		setCalc("");
		setResult(0);
	};

	const numberButtons = generateNumArr.map((element) => (
		<ButtonNumber
			type="button"
			value={element}
			onClick={calcHandler}
		></ButtonNumber>
	));

	const functionButtons = generateFunctions.map((element) => (
		<ButtonOperation
			type="button"
			value={element}
			onClick={calcHandler}
		></ButtonOperation>
	));

	const prevMemoryDataHandler = (memory) => {
		setMemory((prevMemory) => {
			return [...prevMemory, memory];
		});
	};

	const memoryHandler = (selected) => {
		setMemory(selected);
	};

	return (
		<Wrapper>
			<CalculatorContainer>
				<Output data={calc} results={result}></Output>
				<ButtonContainer>
					<ButtonOperation
						type="button"
						value="AC"
						onClick={resetDataHandler}
					></ButtonOperation>
					<ButtonOperation
						type="button"
						value="DEL"
						onClick={clearLastHandler}
					></ButtonOperation>
					{functionButtons}
				</ButtonContainer>
				<ButtonContainer02>
					{numberButtons}
					<ButtonNumber
						type="button"
						value={"="}
						onClick={resultHandler}
					></ButtonNumber>
				</ButtonContainer02>
			</CalculatorContainer>
			<Memory data={memory} onClear={memoryHandler}></Memory>
		</Wrapper>
	);
}

export default App;
