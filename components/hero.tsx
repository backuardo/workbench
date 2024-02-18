"use client";
import { SVGProps } from "react";
import { motion } from "framer-motion";
import { Flex, Heading } from "@radix-ui/themes";

import { cn } from "@/lib/cn";

const SHIMMER_ANIMATION = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
			ease: "easeInOut",
			repeatType: "mirror" as "reverse", // or "loop" or "mirror"
		},
	},
};

const PATH_ANIMATION = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" }, // Specify path animation without repeat
	},
};

export const Hero: React.FC<Omit<SVGProps<SVGSVGElement>, "ref">> = ({
	className,
	...props
}) => {
	return (
		<Flex height="100%" width="100%">
			<Heading weight="bold" size="9" className="text-accent-10">
				beneisner.io
			</Heading>
		</Flex>
	);
};
