"use client";

import { Theme as RadixTheme } from "@radix-ui/themes";

import { ThemeContextProvider } from "@/components/theme-context-provider";
import { UIContextProvider } from "@/components/ui-context-provider";
import { THEME } from "@/lib/config";

type ProviderWithProps = readonly [
	React.ComponentType<any> | React.ForwardRefExoticComponent<any>,
	Record<string, any>?
];

const combineProviders = (
	providers: ProviderWithProps[]
): React.FC<{ children: React.ReactNode }> => {
	return providers.reduce<React.FC<{ children: React.ReactNode }>>(
		(AccumulatedProviders, [Provider, props = {}]) => {
			return ({ children }) => (
				<AccumulatedProviders>
					<Provider {...props}>{children}</Provider>
				</AccumulatedProviders>
			);
		},
		({ children }: { children: React.ReactNode }) => <>{children}</>
	);
};

const providers: ProviderWithProps[] = [
	[ThemeContextProvider],
	[UIContextProvider],
	[RadixTheme, THEME],
];

export const AppContextProvider = combineProviders(providers);
