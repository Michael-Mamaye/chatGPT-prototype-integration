import express, { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateEcommerceData = async (req: Request, res: Response) => {
	try {
		const animal = "horse";
		const completion = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content:
						"generate a sample json array of object for 2 ecommerce product including field names like Product name, description, price and product image",
				},
			],
			temperature: 0,
		});
		const respo = completion.data.choices[0].message?.content
			? completion.data.choices[0].message?.content
			: "";

		// res.status(200).send(JSON.parse(respo));
		res.status(200).send(respo);
	} catch (error: any) {
		if (error?.response) {
			console.error(error?.response.status, error?.response.data);
			res.status(error?.response.status).json(error?.response.data);
		} else {
			console.error(`Error with OpenAI API request: ${error?.message}`);
			res.status(500).json({
				error: {
					message: "An error occurred during your request.",
				},
			});
		}
	}
};

export const generateUsersData = async (req: Request, res: Response) => {
	try {
		const animal = "horse";
		const completion = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content:
						"generate a sample json array of object for 2 users including field names like first name, last name, phone number and address",
				},
			],
			temperature: 0,
		});
		const respo = completion.data.choices[0].message?.content
			? completion.data.choices[0].message?.content
			: "";

		res.status(200).send(JSON.parse(respo));
	} catch (error: any) {
		if (error?.response) {
			console.error(error?.response.status, error?.response.data);
			res.status(error?.response.status).json(error?.response.data);
		} else {
			console.error(`Error with OpenAI API request: ${error?.message}`);
			res.status(500).json({
				error: {
					message: "An error occurred during your request.",
				},
			});
		}
	}
};
