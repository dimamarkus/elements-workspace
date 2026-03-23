import { z } from "zod";

import { contactProgramInterestOptions } from "../../content/shared/forms";

export const contactFormSchema = z.object({
  childAges: z.string().min(1, "Please tell us your child's age or ages."),
  email: z.email("Please enter a valid email address."),
  message: z.string().min(10, "Please add a bit more detail to your message."),
  name: z.string().min(1, "Please enter your name."),
  programInterest: z.enum(contactProgramInterestOptions, {
    error: "Please choose a program interest.",
  }),
});
