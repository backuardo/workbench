"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Text } from "@radix-ui/themes";
import * as Navigation from "@radix-ui/react-navigation-menu";

import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import * as Theme from "@/components/theme";
import { Logo } from "@/components/ui/logo";

export const Header = () => {
	const pathname = usePathname();
	return (
		<Flex direction="column" my="6" gap="3">
			<Flex justify="center">
				<Link href="/">
					<Logo />
				</Link>
			</Flex>
			<Flex>
				<Navigation.Root orientation="horizontal" className="w-screen">
					<Navigation.List className="flex justify-between">
						<Flex gap="3" className="uppercase">
							{ROUTES.map(({ path, name }) => (
								<Navigation.Item>
									<Link key={path} href={path}>
										<Text
											className={cn(
												pathname === path ||
													(path !== "/" && pathname.startsWith(path + "/"))
													? "text-gray-12"
													: "text-gray-10"
											)}
										>
											/{name}
										</Text>
									</Link>
								</Navigation.Item>
							))}
						</Flex>
						<Navigation.Item>
							<Theme.Toggle />
						</Navigation.Item>
					</Navigation.List>
				</Navigation.Root>
			</Flex>
		</Flex>
	);
};
