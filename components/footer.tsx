import { Badge, Flex, Text } from "@radix-ui/themes";
import {
	TwitterLogoIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
} from "@radix-ui/react-icons";

import { ExternalLink } from "@/components/ui/external-link";
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
		<Flex align="center" justify="between" py="6">
			<Flex height="100%" align="end">
				<Text size="1" className="uppercase">
					Ben Eisner &copy;{new Date().getFullYear()}
				</Text>
			</Flex>
			<Flex gap="4">
				{socials.map(({ url, name, Icon }) => (
					<ExternalLink key={url} href={url}>
						<Text size="1" className="uppercase">
							{name}
						</Text>
					</ExternalLink>
				))}
			</Flex>
			<Flex>
				<Badge>v{VERSION}</Badge>
			</Flex>
		</Flex>
	);
};
