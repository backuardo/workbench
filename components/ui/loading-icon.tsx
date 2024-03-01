import { SVGProps } from "react";
import { cn } from "@/lib/cn";

const ANIMATION_DURATION = "1s";

export const LoadingIcon: React.FC<Omit<SVGProps<SVGSVGElement>, "ref">> = ({
	className,
	...props
}) => {
	return (
		<svg
			width="24"
			height="6"
			viewBox="0 0 120 30"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("fill-accent-10", className)}
			{...props}
		>
			<circle cx="15" cy="15" r="15">
				<animate
					attributeName="r"
					from="15"
					to="15"
					begin="0s"
					dur={ANIMATION_DURATION}
					values="15;9;15"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="fill-opacity"
					from="1"
					to="1"
					begin="0s"
					dur={ANIMATION_DURATION}
					values="1;.5;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle cx="60" cy="15" r="9" fill-opacity="0.3">
				<animate
					attributeName="r"
					from="9"
					to="9"
					begin="0s"
					dur={ANIMATION_DURATION}
					values="9;15;9"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="fill-opacity"
					from="0.5"
					to="0.5"
					begin="0s"
					dur={ANIMATION_DURATION}
					values=".5;1;.5"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle cx="105" cy="15" r="15">
				<animate
					attributeName="r"
					from="15"
					to="15"
					begin="0s"
					dur={ANIMATION_DURATION}
					values="15;9;15"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="fill-opacity"
					from="1"
					to="1"
					begin="0s"
					dur={ANIMATION_DURATION}
					values="1;.5;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	);
};
