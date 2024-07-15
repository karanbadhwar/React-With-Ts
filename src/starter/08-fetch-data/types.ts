import { z } from "zod";
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  //   something: z.string(), // will error if proeprty is not there and we parse it .
});

export type Tour = z.infer<typeof tourSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
  const respones = await axios.get<Tour[]>(url);

  const result = tourSchema.array().safeParse(respones.data);

  if (!result.success) {
    console.log(result.error.message);
    throw new Error("Failed to parse tours");
  }

  return result.data;
};
