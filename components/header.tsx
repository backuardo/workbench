"use client";

import Link from "next/link";
import { Flex, Text } from "@radix-ui/themes";
import * as Navigation from "@radix-ui/react-navigation-menu";
import { CubeIcon } from "@radix-ui/react-icons";

import * as Theme from "@/components/theme";
import { Logo } from "./ui/logo";

export const Header = () => {
	return (
		<Flex my="6">
			<Navigation.Root orientation="horizontal" className="w-screen">
				<Navigation.List className="flex justify-between">
					<Navigation.Item>
						<Link href="/">
							<Flex gap="2" align="center">
								<Logo />
							</Flex>
						</Link>
					</Navigation.Item>
					<Navigation.Item>
						<Theme.Toggle />
					</Navigation.Item>
				</Navigation.List>
			</Navigation.Root>
		</Flex>
	);
};
