import { useState } from "react";

type Options = {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	headers?: any;
	body?: Partial<BodyInit>;
};

type Parameters = {
	url: string;
	options?: Options;
};

type Return<T = any> = {
	loading: boolean;
	error: Error | unknown;
	data: T | null;
	request: (overrideOptions?: Options) => Promise<void>;
};

const DEFAULT_OPTIONS: Options = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};

export const useRequest = <T>({ url, options }: Parameters): Return<T> => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | unknown>(null);
	const [data, setData] = useState<T | null>(null);

	const request = async (overrideOptions: Options = {}) => {
		const finalOptions = {
			...DEFAULT_OPTIONS,
			...options,
			...overrideOptions,
			headers: {
				...DEFAULT_OPTIONS.headers,
				...options?.headers,
				...overrideOptions.headers,
			},
		};
		setError(null);
		setLoading(true);

		try {
			const response = await fetch(url, finalOptions as RequestInit); // TypeScript might need a type assertion here
			if (!response.ok) {
				throw new Error(`Error ${response.status}: ${response.statusText}`);
			}
			const result = await response.json();
			setData(result);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		error,
		data,
		request,
	};
};
