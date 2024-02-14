"use client";
import { Canvas } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";

export const Scene: React.FC<{
	children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
	return (
		<Canvas className="!absolute h-screen w-screen">
			<AsciiRenderer
				bgColor="transparent"
				fgColor="var(--accent-11)"
				invert={false}
				resolution={0.2}
			/>
			<ambientLight intensity={Math.PI / 2} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
				decay={0}
				intensity={Math.PI}
			/>
			<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
			{children}
		</Canvas>
	);
};
