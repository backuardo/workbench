import { Badge, Flex, Text } from "@radix-ui/themes";
import {
	TwitterLogoIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
} from "@radix-ui/react-icons";

import { Link } from "@/components/ui/link";
import { VERSION } from "@/lib/constants";

const socials = Object.freeze([
	{
		name: "Twitter",
		url: "https://twitter.com/backuardo",
		Icon: TwitterLogoIcon,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ben-eisner",
		Icon: LinkedInLogoIcon,
	},
	{
		name: "GitHub",
		url: "https://github.com/backuardo",
		Icon: GitHubLogoIcon,
	},
]);

export const Footer: React.FC = () => {
	return (
		<Flex align="center" justify="between" py="6" px="4">
			<Flex height="100%" align="end">
				<Text size="1" className="uppercase text-gray-10">
					Ben Eisner &copy;{new Date().getFullYear()}
				</Text>
			</Flex>
			<Flex gap="4">
				{socials.map(({ url, name, Icon }) => (
					<Link key={url} href={url} className="!text-1 uppercase text-gray-10">
						{name}
					</Link>
				))}
			</Flex>
			<Flex>
				<Badge radius="full">v{VERSION}</Badge>
			</Flex>
		</Flex>
	);
};
