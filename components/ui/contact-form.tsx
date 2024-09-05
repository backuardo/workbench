/**
 * TODO: move to RSC
 */
"use client";

/**
 * TODO:
 * 2. error state (inline error message?)
 * 3. success state (toast?)
 */

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
import { motion, AnimatePresence } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Globe } from "@phosphor-icons/react/dist/ssr";

import { P } from "@/components/ui/typography";
import { Link } from "@/components/ui/link";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { CONTACT } from "@/lib/config";
import { contactSchema } from "@/lib/contact-schema";
import { useRequest } from "@/lib/use-request";

type Inputs = {
	name: string;
	email: string;
	message: string;
};

const ANIMATION_VARIANTS = {
	hidden: { opacity: 0, transition: { duration: 0.5 } },
	visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitted },
		reset,
	} = useForm<Inputs>({
		mode: "onBlur",
		resolver: yupResolver(contactSchema),
	});

	const {
		loading,
		error,
		data: responseData,
		request,
	} = useRequest({
		url: "/api/contact",
		options: {
			method: "POST",
		},
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			await request({ body: JSON.stringify(data) });
			reset();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Flex direction="column" gap="4">
			<P>
				Want to connect? You can use the below form and I&apos;ll get back to
				you.
			</P>
			<Flex
				direction="column"
				gap="4"
				className="border-1 border-gray-5 bg-gray-2"
				p="4"
			>
				<AnimatePresence mode="wait">
					{isSubmitted ? (
						<motion.div
							initial="hidden"
							key="submitted"
							animate="visible"
							exit="hidden"
							variants={ANIMATION_VARIANTS}
						>
							<Flex direction="column" gap="4">
								<Text size="5" weight="bold" className="uppercase">
									Messaged received
								</Text>
								<P>I&apos;ll be in touch soon.</P>
							</Flex>
						</motion.div>
					) : (
						<motion.div
							key="submitting"
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={ANIMATION_VARIANTS}
						>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Flex direction="column" width="100%" gap="4">
									<Flex gap="4" direction={{ initial: "column", sm: "row" }}>
										<Flex direction="column" width="100%" gap="2">
											<label htmlFor="name">
												<Flex gap="4" align="center" className="uppercase">
													<P>Name</P>
													{errors.name && (
														<P size="1" className="text-red-11">
															[Required]
														</P>
													)}
												</Flex>
											</label>
											<TextField.Input
												size="3"
												placeholder="Jonathan Doe"
												{...register("name", { required: true })}
												disabled={isSubmitting}
												variant="surface"
											/>
										</Flex>
										<Flex direction="column" width="100%" gap="2">
											<label htmlFor="email">
												<Flex gap="4" align="center" className="uppercase">
													<P>Email address</P>
													{errors.email && (
														<P size="1" className="text-red-11">
															[Required]
														</P>
													)}
												</Flex>
											</label>
											<TextField.Input
												size="3"
												placeholder="jdoe@example.com"
												{...register("email", { required: true })}
												disabled={isSubmitting}
												variant="surface"
											/>
										</Flex>
									</Flex>
									<Flex direction="column" gap="2">
										<label htmlFor="message">
											<Flex gap="4" align="center" className="uppercase">
												<P>Message</P>
												{errors.message && (
													<P size="1" className="text-red-11">
														[Required]
													</P>
												)}
											</Flex>
										</label>
										<TextArea
											size="3"
											placeholder="Enter your message here"
											{...register("message", { required: true })}
											disabled={isSubmitting}
											variant="surface"
										/>
									</Flex>
									<Grid columns="2" gap="4" mt="2">
										<Button
											type="submit"
											variant="soft"
											size="3"
											className="uppercase"
											disabled={isSubmitting}
										>
											{isSubmitting ? <LoadingIcon /> : <>Send message</>}
										</Button>
									</Grid>
								</Flex>
							</form>
						</motion.div>
					)}
				</AnimatePresence>
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
									<Icon size={12} />
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
