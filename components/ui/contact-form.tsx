"use client";

import {
	TextField,
	Flex,
	TextArea,
	Button,
	Grid,
	Card,
} from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";

import { P } from "@/components/ui/typography";

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
		<Flex
			direction="column"
			gap="4"
			className="border-1 border-gray-5 bg-gray-2"
			p="4"
		>
			<form>
				<Flex direction="column" width="100%" gap="4">
					<Flex direction="column" width="100%" gap="2">
						<label htmlFor="name">
							<P>Name</P>
						</label>
						<TextField.Input
							size="3"
							{...register("name", { required: true })}
							variant="soft"
						/>
						{errors.name && <P>Name is required</P>}
					</Flex>
					<Flex direction="column" width="100%" gap="2">
						<label htmlFor="email">
							<P>Email address</P>
						</label>
						<TextField.Input
							size="3"
							{...register("email", { required: true })}
							variant="soft"
						/>
						{errors.email && <P>Email is required</P>}
					</Flex>
					<Flex direction="column" gap="2">
						<label htmlFor="message">
							<P>Message</P>
						</label>
						<TextArea
							size="3"
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
							radius="full"
							className="uppercase"
						>
							Send message
						</Button>
					</Grid>
				</Flex>
			</form>
		</Flex>
	);
};
