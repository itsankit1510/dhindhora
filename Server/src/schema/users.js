import Ajv from 'ajv';

const ajv = new Ajv({ code: { esm: true } });

const validateUserSchema = (data) => {
  const userSchema = {
    type: 'object',
    properties: {
      firstname: { type: 'string', maxLength: 100 },
      middlename: { type: 'string', maxLength: 100, nullable: true },
      lastname: { type: 'string', maxLength: 100 },
      email: { type: 'string', maxLength: 255, format: 'email' },
      userid: { type: 'string', maxLength: 50 },
      profile_picture: { type: 'string', maxLength: 255, nullable: true },
      birthdate: { type: 'string', format: 'date' },
    },
    required: ['firstname', 'lastname', 'email', 'userid', 'birthdate'],
  };
  const validate = ajv.compile(userSchema);
  const valid = validate(data);
  if (valid) {
    return { valid: true, data };
  } else {
    return { valid: false, errors: validate.errors };
  }
};

export default {
  validateUserSchema,
};
