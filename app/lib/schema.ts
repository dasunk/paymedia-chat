import { z } from "zod";

export const Schema = z.object({
    comment: z.string()
});

export type SchemaType = z.infer<typeof Schema>;