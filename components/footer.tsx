import { Flex, Text } from "@radix-ui/themes";
import {
	TwitterLogoIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
} from "@radix-ui/react-icons";

import { ExternalLink } from "@/components/ui/external-link";

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
			<Flex gap="4">
				{socials.map(({ url, name, Icon }) => (
					<ExternalLink key={url} href={url}>
						<Text size="1">{name}</Text>
					</ExternalLink>
				))}
			</Flex>
			<Flex height="100%" align="end">
				<Text size="1">Ben Eisner &copy;{new Date().getFullYear()}</Text>
			</Flex>
		</Flex>
	);
};
