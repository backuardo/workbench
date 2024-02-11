import { Text as RadixText } from "@radix-ui/themes";

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<RadixText size="3" weight="light" className="text-grayA-11">
			{children}
		</RadixText>
	);
};
