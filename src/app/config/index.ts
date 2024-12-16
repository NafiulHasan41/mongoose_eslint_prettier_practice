import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  mongoUri: process.env.DATABASE_URL,
  bcryptSalt: process.env.BCRYPT_SALT_ROUNDS,
};
