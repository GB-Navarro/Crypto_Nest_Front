import { MutatingDots } from "react-loader-spinner";

export default function Loading() {
	return (
		<MutatingDots
			height="100"
			width="100"
			color="#ffc300"
			secondaryColor="#ffd60a"
			radius="12.5"
			ariaLabel="mutating-dots-loading"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
	);
}
