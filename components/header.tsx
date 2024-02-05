"use client";

import { usePathname } from "next/navigation";
import { Flex, Text } from "@radix-ui/themes";
import * as Navigation from "@radix-ui/react-navigation-menu";
import { ReaderIcon } from "@radix-ui/react-icons";

import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";
import * as Theme from "@/components/theme";
import { Link } from "@/components/ui/link";

export const Header = () => {
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
		<Flex direction="column" my="6" gap="3">
			<Flex justify="center">
				<Link href="/">
					<Logo className="fill-gray-8 hover:fill-gray-12" />
				</Link>
			</Flex>
			<Flex>
				<Navigation.Root orientation="horizontal" className="w-screen">
					<Navigation.List className="flex justify-between">
						<Flex gap="3" className="uppercase">
							{ROUTES.map(({ path, name }) => (
								<Navigation.Item key={path}>
									<Flex>
										<Link href={path}>
											<Text
												className={cn(
													isExactRoute(path) || isSubRoute(path)
														? "text-gray-12"
														: "text-gray-10",
													"hover:text-gray-12"
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
													className="text-gray-12"
												>
													/<ReaderIcon height={13} width={13} />
												</Flex>
											</Link>
										)}
									</Flex>
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
