import * as yup from "yup";

export const contactSchema = yup
	.object({
		email: yup.string().email().required(),
		name: yup.string().required(),
		message: yup.string().required(),
	})
	.required();
