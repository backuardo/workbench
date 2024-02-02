import { Theme as RadixTheme } from "@radix-ui/themes";

import * as Theme from "@/components/theme";

export const Providers = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<Theme.Provider>
			<RadixTheme
				accentColor="gray"
				grayColor="mauve"
				radius="small"
				scaling="90%"
				panelBackground="translucent"
			>
				{children}
			</RadixTheme>
		</Theme.Provider>
	);
};
