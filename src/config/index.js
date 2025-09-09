
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    env: process.env.NODE_ENV,
    PORT: process.env.PORT,
    // Server
    SERVER_URL: process.env.SERVER_URL,
    // JWT
    JWT_SECRET: process.env.JWT_SECRET,
    // Google OAuth
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
}