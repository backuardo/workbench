"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Instances, Instance } from "@react-three/drei";

const Box = () => {
	const ref = useRef(null!);

	useFrame(() => {
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={ref}>
			<boxGeometry attach="geometry" args={[2, 2, 2]} />
			<meshStandardMaterial attach="material" color="orange" />
		</mesh>
	);
};

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
	// Renders a grid and crosses as instances
	<Instances position={[0, -1.02, 0]}>
		<planeGeometry args={[lineWidth, height]} />
		<meshBasicMaterial color="#999" />
		{Array.from({ length: number }, (_, y) =>
			Array.from({ length: number }, (_, x) => (
				<group
					key={x + ":" + y}
					position={[
						x * 2 - Math.floor(number / 2) * 2,
						-0.01,
						y * 2 - Math.floor(number / 2) * 2,
					]}
				>
					<Instance rotation={[-Math.PI / 2, 0, 0]} />
					<Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
				</group>
			))
		)}
		<gridHelper args={[100, 100, "#bbb", "#bbb"]} position={[0, -0.01, 0]} />
	</Instances>
);

export const Scene = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Canvas
				camera={{ position: [10, 20, 20], zoom: 10 }}
				className="w-full max-h-96"
			>
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />
				<Box />
				<Grid />
			</Canvas>
		</Suspense>
	);
};
