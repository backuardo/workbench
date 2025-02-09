import { NextPage } from "next";
import Image from "next/image";
import { Badge, Flex } from "@radix-ui/themes";

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
				<Flex
					className="relative"
					width="100%"
					height="auto"
					direction="column"
				>
					<Image
						src="/images/ben.webp"
						alt="Ben"
						layout="responsive"
						width={589}
						height={540}
						className="rounded-full w-full h-auto filter brightness-105 contrast-125 border-1 border-gray-5"
					/>
					<Badge size="1" className="bg-gray-5 flex justify-end">
						In a helicopter, deployment 2014
					</Badge>
				</Flex>
				<P>
					I'm a software engineer who seeks out big problems &mdash;
					particularly in building reliable software and enhancing application
					security.
				</P>
				<P>
					I started programming while serving as an infantry (0331) squad leader
					in the{" "}
					<Link href="https://marines.com" className="font-bold">
						US&nbsp;Marines
					</Link>
					. While on deployment I read{" "}
					<span className="italic">Without Their Permission</span> by Alexis
					Ohanian, and started tinkering with JavaScript shortly after. After
					leaving the service I continued learning programming and computer
					science as an undergrad at{" "}
					<Link href="https://dartmouth.edu" className="font-bold">
						Dartmouth&nbsp;College
					</Link>
					.
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
					as lead engineer. Cedar is a seed-stage company building the operating
					system for urban development.
				</P>
				<P>
					Outside of programming, I like to mentor military veterans, collect
					hot sauce, read, play video games, and go boating with my wife and my
					dog.
				</P>
			</Section.Content>
		</Section.Container>
	);
};

export default About;
