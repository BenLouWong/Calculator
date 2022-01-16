import React from "react";
import { Wrapper, Current, Previous } from "./Output.styles";

export default function Output(props) {
	const displayDataHandler = `${props.data.length > 0 ? props.data : "0"}`;

	return (
		<Wrapper>
			<Previous>({props.results})</Previous>
			<Current>{displayDataHandler}</Current>
		</Wrapper>
	);
}
