import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path:resolve(__dirname, '../../.env') });
console.log("DATABASE_URL: ", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
