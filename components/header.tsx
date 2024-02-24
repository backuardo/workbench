"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
	Flex,
	IconButton,
	Text,
	Portal,
	Theme as RadixTheme,
	Separator,
	Button,
} from "@radix-ui/themes";
import * as Navigation from "@radix-ui/react-navigation-menu";
import {
	Cross1Icon,
	HamburgerMenuIcon,
	ReaderIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";

import { ROUTES, THEME } from "@/lib/config";
import { useIsClient } from "@/lib/use-is-client";
import { useOutsideClickEvent } from "@/lib/use-click-outside-event";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";
import { USAFlag } from "@/components/ui/usa-flag";
import * as Theme from "@/components/theme";
import { Link } from "@/components/ui/link";
import { Clock } from "@/components/ui/clock";

const SIDE_MENU_ANIMATION_VARIANTS = {
	open: {
		x: 0,
		opacity: 1,
		backgroundColor: "var(--gray-1)",
		filter: "blur(0)",
		transition: { type: "easeInOut", duration: 0.2 },
	},
	closed: {
		x: "-120%",
		opacity: 1,
		backgroundColor: "var(--gray-1)",
		filter: "blur(10px)",
		transition: { type: "easeInOut", duration: 0.2 },
	},
	exit: {
		x: "-200%",
		opacity: 1,
		backgroundColor: "var(--gray-1)",
		filter: "blur(10px)",
		transition: { type: "easeInOut", duration: 0.2 },
	},
};

const OVERLAY_ANIMATION_VARIANTS = {
	hidden: {
		opacity: 0,
		transition: { duration: 0.2 },
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.2 },
	},
};

// {isSubRoute(path) && (
// 	<Link href={pathname}>
// 		<Flex
// 			align="center"
// 			className="text-accent-10 font-bold text-5 !leading-1"
// 		>
// 			/
// 			<ReaderIcon
// 				height={16}
// 				width={16}
// 				strokeWidth={0.5}
// 				className="stroke-accent-10"
// 			/>
// 		</Flex>
// 	</Link>
// )}

export const Header: React.FC = () => {
	const pathname = usePathname();
	const router = useRouter();
	const menuRef = useRef(null!);
	const [open, setOpen] = useState(false);
	const isClient = useIsClient();

	useEffect(() => {
		// `Link`s are rendered in a portal, so we need to manually prefetch the pages
		ROUTES.forEach(({ path }) => {
			router.prefetch(path);
		});
	}, []);

	useOutsideClickEvent(menuRef, () => {
		setOpen(false);
	});

	const isExactRoute = (path: string) => {
		return pathname === path;
	};

	const isSubRoute = (mainRoute: string) => {
		return (
			pathname.startsWith(mainRoute + "/") && pathname.length > mainRoute.length
		);
	};

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			{isClient && (
				<AnimatePresence mode="wait">
					<Portal className="absolute top-0">
						<RadixTheme {...THEME}>
							<>
								<AnimatePresence>
									{open && (
										<motion.div
											initial="hidden"
											animate="visible"
											exit="hidden"
											variants={OVERLAY_ANIMATION_VARIANTS}
											className="fixed inset-0 bg-blackA-6 grayscale"
											onClick={toggleMenu}
										/>
									)}
								</AnimatePresence>
								<motion.div
									ref={menuRef}
									key="side-menu"
									initial="closed"
									animate={open ? "open" : "closed"}
									exit="exit"
									variants={SIDE_MENU_ANIMATION_VARIANTS}
									onClick={(e) => e.stopPropagation()}
									className="fixed h-screen w-[24.8rem] border-1 border-l-0 border-gray-5 flex flex-col justify-between"
								>
									<Flex width="100%" align="center" justify="center">
										<Navigation.Root
											orientation="horizontal"
											className="w-screen"
										>
											<Navigation.List className="flex justify-between">
												<Flex
													className="uppercase"
													direction="column"
													width="100%"
												>
													<Flex
														p="4"
														align="end"
														justify="between"
														className="h-[6.6rem]"
													>
														<Text
															size="8"
															weight="bold"
															className="font-mono text-accent-9"
														>
															Navigation
														</Text>
														<IconButton
															size="1"
															onClick={toggleMenu}
															variant="surface"
														>
															<Cross1Icon />
														</IconButton>
													</Flex>
													<Separator size="4" className="bg-gray-3" />
													<Flex
														mt="4"
														direction="column"
														className=""
														gap="1"
														mx="4"
													>
														{ROUTES.map(({ path, name }) => (
															<Navigation.Item key={path}>
																<Link
																	href={path}
																	onClick={toggleMenu}
																	className="w-full"
																>
																	<Flex
																		align="center"
																		width="100%"
																		className="p-rx-4 border-1 border-gray-3 hover:bg-blackA-1"
																	>
																		<Text
																			size="4"
																			weight="light"
																			className={cn(
																				isExactRoute(path) || isSubRoute(path)
																					? "text-accent-10 font-bold"
																					: "text-gray-10",
																				"hover:text-accent-10"
																			)}
																		>
																			/{name}
																		</Text>
																	</Flex>
																</Link>
															</Navigation.Item>
														))}
													</Flex>
												</Flex>
											</Navigation.List>
										</Navigation.Root>
									</Flex>
									<Flex
										justify="between"
										p="4"
										className="top-1" // Aligns with footer, given 1px border
									>
										<Clock />
										<Text size="1" className="uppercase text-gray-8">
											Built in the USA
										</Text>
										{/* <USAFlag /> */}
									</Flex>
								</motion.div>
							</>
						</RadixTheme>
					</Portal>
				</AnimatePresence>
			)}
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
							<Flex gap="3" className="uppercase" align="center">
								<motion.div>
									<Button variant="surface" size="1" onClick={toggleMenu}>
										<Flex gap="2" align="center" justify="center">
											<HamburgerMenuIcon />
											<Text className="uppercase">Menu</Text>
										</Flex>
									</Button>
								</motion.div>
							</Flex>
							<Flex gap="4" align="center">
								<Navigation.Item>
									<Theme.Toggle />
								</Navigation.Item>
							</Flex>
						</Navigation.List>
					</Navigation.Root>
				</Flex>
			</Flex>
		</>
	);
};
