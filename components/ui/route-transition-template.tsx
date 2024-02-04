import { MotionDiv } from "@/lib/motion-div";

export const RouteTransitionTemplate: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<MotionDiv
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.5,
				ease: "linear",
				type: "tween",
			}}
		>
			{children}
		</MotionDiv>
	);
};
