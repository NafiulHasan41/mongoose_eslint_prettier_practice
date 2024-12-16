// using joi 
import Joi from 'joi';

// Validation for UserNameSchema
const UserNameSchema = Joi.object({
  firstName: Joi.string()
    .pattern(/^[A-Z][a-z]+$/)
    .trim()
    .min(3)
    .max(10)
    .required()
    .messages({
      'string.pattern.base': 'First name should start with a capital letter and only contain alphabets.',
      'string.min': 'First name cannot be less than 3 characters.',
      'string.max': 'First name cannot be more than 10 characters.',
      'any.required': 'First name is required.',
    }),

  middleName: Joi.string().optional(),

  lastName: Joi.string()
    .trim()
    .required()
    .messages({
      'any.required': 'Last name is required.',
    }),
});

// Validation for GuardianSchema
const GuardianSchema = Joi.object({
  guardianName: Joi.string()
    .trim()
    .required()
    .messages({
      'any.required': "Guardian's name is required.",
    }),

  relation: Joi.string()
    .trim()
    .required()
    .messages({
      'any.required': 'Relation to the student is required.',
    }),

  contactNumber: Joi.string()
    .trim()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.pattern.base': "Guardian's contact number must be 10 digits.",
      'any.required': "Guardian's contact number is required.",
    }),
});

// Validation for StudentSchema
const StudentSchema = Joi.object({
  id: Joi.string()
    .trim()
    .required()
    .messages({
      'any.required': 'Student ID is required.',
    }),

  name: UserNameSchema.required().messages({
    'any.required': "Student's name is required.",
  }),

  gender: Joi.string()
    .valid('male', 'female')
    .required()
    .messages({
      'any.only': 'Gender must be either male or female.',
      'any.required': 'Gender is required.',
    }),

  dataOfBirth: Joi.string()
    .isoDate()
    .required()
    .messages({
      'date.format': 'Date of birth must be a valid ISO date (YYYY-MM-DD).',
      'any.required': 'Date of birth is required.',
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email must be a valid email address.',
      'any.required': 'Email address is required.',
    }),

  contactNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Contact number must be 10 digits.',
      'any.required': 'Contact number is required.',
    }),

  emergencyContactNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Emergency contact number must be 10 digits.',
      'any.required': 'Emergency contact number is required.',
    }),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'any.only': 'Blood group must be one of A+, A-, B+, B-, AB+, AB-, O+, O-.',
    }),

  address: Joi.object({
    permanent: Joi.string()
      .trim()
      .required()
      .messages({
        'any.required': 'Permanent address is required.',
      }),

    current: Joi.string()
      .trim()
      .required()
      .messages({
        'any.required': 'Current address is required.',
      }),
  }).required().messages({
    'any.required': 'Address is required.',
  }),

  guardian: GuardianSchema.required().messages({
    'any.required': 'Guardian details are required.',
  }),

  profileImage: Joi.string().uri().optional().messages({
    'string.uri': 'Profile image must be a valid URI.',
  }),

  isActive: Joi.string()
    .valid('active', 'inactive')
    .default('active')
    .messages({
      'any.only': 'Status must be either active or inactive.',
    }),
});

export default StudentSchema;
