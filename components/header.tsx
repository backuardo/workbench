"use client";

import Link from "next/link";
import { Flex, Text } from "@radix-ui/themes";
import * as Navigation from "@radix-ui/react-navigation-menu";
import { CubeIcon } from "@radix-ui/react-icons";

import * as Theme from "@/components/theme";

export const Header = () => {
	return (
		<Flex my="6">
			<Navigation.Root orientation="horizontal" className="w-screen">
				<Navigation.List className="flex justify-between">
					<Link href="/">
						<Flex gap="3" align="center">
							<CubeIcon width={20} height={20} />
							<Text size="5" weight="medium" className="uppercase">
								Backuardo&apos;s Workbench
							</Text>
						</Flex>
					</Link>
					<Navigation.Item>
						<Flex gap="2">
							<Theme.Toggle />
						</Flex>
					</Navigation.Item>
				</Navigation.List>
			</Navigation.Root>
		</Flex>
	);
};
