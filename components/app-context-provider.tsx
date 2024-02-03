"use client";

import { Theme as RadixTheme } from "@radix-ui/themes";

import * as Theme from "@/components/theme";

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
	[Theme.Provider],
	[
		RadixTheme,
		{
			accentColor: "gray",
			grayColor: "mauve",
			radius: "small",
			scaling: "90%",
			panelBackground: "translucent",
		},
	],
];

export const AppContextProvider = combineProviders(providers);
