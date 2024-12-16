import { z } from "zod";

// Validation for UserName schema
const UserNameSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name can not be less than 3 characters" })
    .max(10, { message: "First name can not be more than 10 characters" })
    .regex(/^[A-Z][a-z]+$/, {
      message: "First name(from zod validation) should start with a capital letter and only contain alphabets",
    }),
  middleName: z.string().optional(),
  lastName: z.string({ required_error: "Last name is required" }),
});

// Validation for Guardian schema
const GuardianSchema = z.object({
  guardianName: z.string({ required_error: "Guardian name is required" }),
  relation: z.string({ required_error: "Relation to the student is required" }),
  contactNumber: z.string({ required_error: "Guardian's contact number is required" }),
});

// Validation for Address schema
const AddressSchema = z.object({
  permanent: z.string({ required_error: "Permanent address is required" }),
  current: z.string({ required_error: "Current address is required" }),
});

// Validation for Student schema
const StudentSchema = z.object({
  id: z.string({ required_error: "Student ID is required" }),
  name: UserNameSchema, // Nested UserNameSchema
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password can not be less than 8 characters" })
    .max(24, { message: "Password can not be more than 24 characters" }),
  gender: z.enum(["male", "female"], { required_error: "Gender is required" }),
  dataOfBirth: z.string({ required_error: "Date of birth is required" }),
  email: z.string({ required_error: "Email address is required" }).email("Invalid email format"),
  contactNumber: z.string({ required_error: "Contact number is required" }),
  emergencyContactNumber: z.string({ required_error: "Emergency contact number is required" }),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  address: AddressSchema, // Nested AddressSchema
  guardian: GuardianSchema, // Nested GuardianSchema
  profileImage: z.string().optional(),
  isActive: z.enum(["active", "inactive"]).default("active"),
});

// Export the Zod schema
export const StudentValidationSchema = StudentSchema;