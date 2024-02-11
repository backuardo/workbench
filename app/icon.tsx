import { ImageResponse } from "next/og";

export const size = {
	width: 32,
	height: 32,
};

export const contentType = "image/png";

const Icon = () => {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 24,
					background: "rgb(205, 255, 93)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "50%",
				}}
			/>
		),
		{
			...size,
		}
	);
};

export default Icon;
