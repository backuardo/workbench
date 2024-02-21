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
		<Flex direction="column" gap="4">
			<form>
				<Flex direction="column" width="100%" gap="4">
					<Flex gap="4" width="100%">
						<Flex direction="column" width="100%" gap="2">
							<label htmlFor="name">
								<P>Name</P>
							</label>
							<TextField.Input
								{...register("name", { required: true })}
								variant="surface"
							/>
							{errors.name && <P>Name is required</P>}
						</Flex>
						<Flex direction="column" width="100%" gap="2">
							<label htmlFor="email">
								<P>Email address</P>
							</label>
							<TextField.Input
								{...register("email", { required: true })}
								variant="surface"
							/>
							{errors.email && <P>Email is required</P>}
						</Flex>
					</Flex>
					<Flex direction="column" gap="2">
						<label htmlFor="message">
							<P>Message</P>
						</label>
						<TextArea
							{...register("message", { required: true })}
							variant="surface"
						/>
						{errors.message && <P>Message is required</P>}
					</Flex>
					<Grid columns="2" gap="4" mt="2">
						<Button type="submit" variant="solid" className="uppercase">
							Send message
						</Button>
					</Grid>
				</Flex>
			</form>
		</Flex>
	);
};
