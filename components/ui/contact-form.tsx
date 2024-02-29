"use client";

import {
	TextField,
	Flex,
	TextArea,
	Button,
	Grid,
	Callout,
	Card,
	Text,
} from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import { GlobeIcon } from "@radix-ui/react-icons";

import { P } from "@/components/ui/typography";
import { Link } from "@/components/ui/link";
import { CONTACT } from "@/lib/config";

type Inputs = {
	name: string;
	email: string;
	message: string;
};

export const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	return (
		<Flex direction="column" gap="4">
			<P>
				Want to connect? You can use the below form (100% delivery rate), or any
				of the following methods and I&apos;ll get back to you.
			</P>
			<Callout.Root>
				<Callout.Icon>
					<GlobeIcon />
				</Callout.Icon>
				<Callout.Text>Async communication always preferred.</Callout.Text>
			</Callout.Root>
			<Flex
				direction="column"
				gap="4"
				className="border-1 border-gray-5 bg-gray-2"
				p="4"
			>
				<form>
					<Flex direction="column" width="100%" gap="4">
						<Flex gap="4" direction={{ initial: "column", sm: "row" }}>
							<Flex direction="column" width="100%" gap="2">
								<label htmlFor="name">
									<P className="uppercase">Name</P>
								</label>
								<TextField.Input
									size="3"
									placeholder="Jonathan Doe"
									{...register("name", { required: true })}
									variant="soft"
								/>
								{errors.name && <P>Name is required</P>}
							</Flex>
							<Flex direction="column" width="100%" gap="2">
								<label htmlFor="email">
									<P className="uppercase">Email address</P>
								</label>
								<TextField.Input
									size="3"
									placeholder="jdoe@example.com"
									{...register("email", { required: true })}
									variant="soft"
								/>
								{errors.email && <P>Email is required</P>}
							</Flex>
						</Flex>
						<Flex direction="column" gap="2">
							<label htmlFor="message">
								<P className="uppercase">Message</P>
							</label>
							<TextArea
								size="3"
								placeholder="Enter your message here"
								{...register("message", { required: true })}
								variant="soft"
							/>
							{errors.message && <P>Message is required</P>}
						</Flex>
						<Grid columns="2" gap="4" mt="2">
							<Button
								type="submit"
								variant="soft"
								size="3"
								className="uppercase"
							>
								Send message
							</Button>
						</Grid>
					</Flex>
				</form>
			</Flex>
			<Card variant="ghost" mt="2">
				<Flex
					gap={{ initial: "2", sm: "4" }}
					direction={{ initial: "column", sm: "row" }}
					className="uppercase"
					align="start"
				>
					{Object.values(CONTACT).map(({ name, url, handle, Icon }) => (
						<Flex key={name} align="center" justify="center">
							<Link href={url}>
								<Flex
									align="center"
									gap="2"
									className="text-1 text-gray-10 hover:text-accent-10"
								>
									<Icon />
									<Text>{handle}</Text>
								</Flex>
							</Link>
						</Flex>
					))}
				</Flex>
			</Card>
		</Flex>
	);
};
