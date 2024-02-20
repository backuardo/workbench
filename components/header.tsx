"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Flex, Text } from "@radix-ui/themes";
import * as Navigation from "@radix-ui/react-navigation-menu";
import { ReaderIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { format } from "date-fns";

import { ROUTES } from "@/lib/config";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";
import * as Theme from "@/components/theme";
import { Link } from "@/components/ui/link";
import { Clock } from "@/components/ui/clock";

export const Header: React.FC = () => {
	const pathname = usePathname();

	const isExactRoute = (path: string) => {
		return pathname === path;
	};

	const isSubRoute = (mainRoute: string) => {
		return (
			pathname.startsWith(mainRoute + "/") && pathname.length > mainRoute.length
		);
	};

	return (
		<Flex
			direction="column"
			py="4"
			gap="0"
			className="border-b-1 border-gray-5"
		>
			<Flex justify="center">
				<Link href="/">
					<Logo className="fill-gray-10 hover:fill-accent-10" />
				</Link>
			</Flex>
			<Flex px="4">
				<Navigation.Root orientation="horizontal" className="w-screen">
					<Navigation.List className="flex justify-between">
						<Flex gap="4" className="uppercase">
							{ROUTES.map(({ path, name }) => (
								<Navigation.Item key={path}>
									<Flex>
										<Link href={path}>
											<Text
												className={cn(
													isExactRoute(path) || isSubRoute(path)
														? "text-accent-10 font-bold"
														: "text-gray-10",
													"hover:text-accent-10"
												)}
											>
												/{name}
											</Text>
										</Link>
										{isSubRoute(path) && (
											<Link href={pathname}>
												<Flex
													direction="row"
													align="center"
													className="text-accent-10 font-bold"
												>
													/
													<ReaderIcon
														height={13}
														width={13}
														strokeWidth={0.75}
														className="stroke-accent-10"
													/>
												</Flex>
											</Link>
										)}
									</Flex>
								</Navigation.Item>
							))}
						</Flex>
						<Flex gap="4" align="center">
							<Navigation.Item>
								<Clock />
							</Navigation.Item>
							<Navigation.Item>
								<Theme.Toggle />
							</Navigation.Item>
						</Flex>
					</Navigation.List>
				</Navigation.Root>
			</Flex>
		</Flex>
	);
};
