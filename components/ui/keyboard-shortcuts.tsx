import { Table, Flex, Kbd, Text } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
import { KEYBOARD_SHORTCUTS } from "@/lib/config";

const ANIMATION_VARIANTS = {
	open: { opacity: 1, height: "auto" },
	collapsed: { opacity: 0, height: 0 },
};

export const KeyboardShortcuts: React.FC = () => {
	return (
		<Accordion.Root type="single" collapsible className="w-full">
			<Accordion.Item className="AccordionItem" value="item-1">
				<Accordion.Trigger
					className={cn(
						"w-full border-1 border-gray-5 p-rx-4 bg-gray-2",
						"hover:bg-blackA-1 [&&]:hover:cursor-s-resize data-[state=open]:[&&]:hover:cursor-n-resize"
					)}
				>
					<Flex gap="4">
						<Kbd className="text-accent-9">?</Kbd>
						<Text size="3" weight="light" className="uppercase text-gray-11">
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
								{KEYBOARD_SHORTCUTS.map(({ name, keyboardShortcut }) => (
									<Table.Row key={keyboardShortcut}>
										<Table.Cell className="px-rx-4">
											<Kbd className="text-accent-9">{keyboardShortcut}</Kbd>
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
