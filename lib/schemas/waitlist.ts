import { z } from "zod";

import {
  waitlistProgramInterestOptions,
  waitlistReferralOptions,
} from "../../content/shared/forms";

export const waitlistFormSchema = z.object({
  childAge: z.string().min(1, "Please enter your child's age."),
  childName: z.string().min(1, "Please enter your child's name."),
  email: z.email("Please enter a valid email address."),
  note: z.string().optional(),
  parentName: z.string().min(1, "Please enter the parent's name."),
  programInterest: z.enum(waitlistProgramInterestOptions, {
    error: "Please choose a program interest.",
  }),
  referralSource: z
    .union([z.enum(waitlistReferralOptions), z.literal("")])
    .optional(),
});
