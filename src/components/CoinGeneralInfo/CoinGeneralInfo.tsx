import { Main, Tittle, BottomBox } from "./styles";

import MainInfos from "./MainInfos";
import Description from "./Description";
import OthersInfos from "./OthersInfos";
import Links from "./Links";
export default function CoinGeneralInfo(props) {
	const {
		image,
		name,
		description,
		symbol,
		genesisDate,
		hashingAlgorithm,
		blockTimeInMinutes,
		links,
	} = props;

	return (
		<>
			<Main>
				<Tittle>General Info</Tittle>
				<MainInfos image={image} name={name} />
				<Description description={description} />
				<BottomBox>
					<OthersInfos
						symbol={symbol}
						genesisDate={genesisDate}
						hashingAlgorithm={hashingAlgorithm}
						blockTimeInMinutes={blockTimeInMinutes}
					/>
					<Links links={links} />
				</BottomBox>
			</Main>
		</>
	);
}
