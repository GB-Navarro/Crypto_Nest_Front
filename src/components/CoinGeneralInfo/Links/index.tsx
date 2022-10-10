import {
	Container,
	SubTittleBox,
	SubTittle,
	LinksBox,
	LinkType,
	Type
} from "./styles";

export default function Links(props) {
	const { links } = props;

	return (
		<>
			<Container>
				<SubTittleBox>
					<SubTittle> Important Links </SubTittle>
				</SubTittleBox>
				<LinksBox>
				<LinkType>
						<Type>
							📢 <a href={links.forum[0]}>Forum</a>
						</Type>
					</LinkType>
					<LinkType>
						<Type>
							📚 <a href={links.repositories}>Github</a>{" "}
						</Type>
					</LinkType>
					<LinkType>
						<Type>
							🏡 <a href={links.homepage[0]}> Homepage</a>
						</Type>
					</LinkType>
					<LinkType>
						<Type>
							🧱{" "}
							<a href={links.blockchainSite[0]}>
								Blockchain Info
							</a>{" "}
						</Type>
					</LinkType>
				</LinksBox>
			</Container>
			;
		</>
	);
}
