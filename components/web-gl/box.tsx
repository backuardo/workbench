"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Box: React.FC = () => {
	const ref = useRef(null!);

	useFrame(() => {
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={ref}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial />
		</mesh>
	);
};
