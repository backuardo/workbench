import { useCallback, useEffect, RefObject } from "react";

export const useOutsideClickEvent = <T extends HTMLElement>(
	ref: RefObject<T>,
	callback: () => void
) => {
	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		},
		[ref, callback]
	);

	useEffect(() => {
		if (ref.current) {
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}
	}, [handleClickOutside, ref]);
};
