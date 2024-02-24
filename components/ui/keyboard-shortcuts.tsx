import { Table, Flex, Text, Badge } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
import { KEYBOARD_SHORTCUTS } from "@/lib/config";

const ANIMATION_VARIANTS = {
	open: { opacity: 1, height: "auto" },
	collapsed: { opacity: 0, height: 0 },
};

const KEYBOARD_SHORTCUTS_MENU_ID = "keyboard-shortcuts";

export const KeyboardShortcuts: React.FC = () => {
	return (
		<Accordion.Root
			type="single"
			defaultValue={KEYBOARD_SHORTCUTS_MENU_ID}
			collapsible
			className="w-full"
		>
			<Accordion.Item value={KEYBOARD_SHORTCUTS_MENU_ID}>
				<Accordion.Trigger
					className={cn(
						"w-full border-1 border-gray-5 p-rx-4 bg-gray-1",
						"hover:bg-blackA-1 [&&]:hover:cursor-s-resize data-[state=open]:[&&]:hover:cursor-n-resize"
					)}
				>
					<Flex gap="4" align="center">
						<Text size="3" weight="light" className="uppercase text-gray-10">
							Keyboard shortcuts
						</Text>
					</Flex>
				</Accordion.Trigger>
				<Accordion.Content asChild>
					<motion.div
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={ANIMATION_VARIANTS}
						transition={{ type: "easeInOut", duration: 0.2 }}
					>
						<Table.Root
							size="1"
							variant="surface"
							className="w-full border-t-0"
						>
							<Table.Header>
								<Table.Row className="uppercase text-accent-9">
									<Table.ColumnHeaderCell className="px-rx-4">
										Shortcut
									</Table.ColumnHeaderCell>
									<Table.ColumnHeaderCell className="px-rx-4">
										Action
									</Table.ColumnHeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{KEYBOARD_SHORTCUTS.map(({ name, key, display }) => (
									<Table.Row key={key}>
										<Table.Cell className="px-rx-4">
											<Badge
												variant="outline"
												radius="large"
												className="shadow-2 border-1 border-accent-5"
											>
												<kbd>{display}</kbd>
											</Badge>
										</Table.Cell>
										<Table.Cell className="uppercase px-rx-4 text-gray-10 font-light">
											{name}
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Root>
					</motion.div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
};
