import { Badge, Flex, Text } from "@radix-ui/themes";

import { Link } from "@/components/ui/link";
import { VERSION, CONTACT } from "@/lib/config";

export const Footer: React.FC = () => {
	return (
		<Flex align="center" justify="between" p="4">
			<Flex height="100%" align="end">
				<Text size="1" className="uppercase text-gray-10">
					&copy;{new Date().getFullYear()}
				</Text>
			</Flex>
			<Flex gap="4">
				{Object.values(CONTACT).map(({ name, url }) => (
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
