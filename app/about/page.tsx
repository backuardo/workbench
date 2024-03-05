import { NextPage } from "next";

import { Link } from "@/components/ui/link";
import { Section } from "@/components/layout/section";
import { P } from "@/components/ui/typography";

export const metadata = {
	title: "ABOUT",
	description: "ABOUT",
};

const About: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Heading title="About" />
			<Section.Content>
				<P>
					I'm a software engineer and web enthusiast who likes tackling big
					problems with teams of rockstars.
				</P>
				<P>
					I started programming while serving as an infantry (0331) squad leader
					in the{" "}
					<Link href="https://marines.com" className="font-bold">
						US&nbsp;Marines
					</Link>
					. I became interested in technology and startups after reading{" "}
					<span className="italic">Without Their Permission</span> by Alexis
					Ohanian, a book about the limited barriers to entry in building online
					businesses. This pivotal moment led me to study computer science at{" "}
					<Link href="https://dartmouth.edu" className="font-bold">
						Dartmouth&nbsp;College
					</Link>{" "}
					after leaving the service.
				</P>
				<P>
					I was an early engineer at{" "}
					<Link href="https://cameo.com" className="font-bold">
						Cameo
					</Link>
					, joining the company in 2017 and leaving in 2023. During my time
					there, I worked across the stack and helped scale the platform to
					millions of users. During my last year, I led technology for the
					company's crypto efforts.
				</P>
				<P>
					Right now I'm working on{" "}
					<Link href="https://cedar.build" className="font-bold">
						Cedar
					</Link>{" "}
					as the lead engineer. Cedar is a seed-stage company building the
					operating system for urban development.
				</P>
				<P>
					Outside of my professional endeavors, I mentor military veterans,
					leveraging my experience to guide them through their tech journeys. I
					also like collecting hot sauce, and boating with my fiancée Maura and
					my dog George.
				</P>
			</Section.Content>
		</Section.Container>
	);
};

export default About;
