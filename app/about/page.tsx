import { NextPage } from "next";

import { Link } from "@/components/ui/link";
import { Section } from "@/components/ui/section";
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
					I'm a software engineer and web enthusiast. I like tackling big
					problems and working with teams that can solve them.
				</P>
				<P>
					I started programming while serving as an infantry squad leader in the{" "}
					<Link href="https://marines.com" className="font-bold">
						US&nbsp;Marines
					</Link>
					, and studied computer science at{" "}
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
					definitive platform for commercial development.
				</P>
				<P>
					In my free time I like to mentor military veterans, collect hot sauce,
					lift weights, and go boating with my fiancée Maura and my dog George.
				</P>
			</Section.Content>
		</Section.Container>
	);
};

export default About;
