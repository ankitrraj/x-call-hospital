/**
 * Validate required environment variables
 * Prevents app from starting with missing config
 */

interface RequiredEnvVars {
  DATABASE_URL: string;
  JWT_SECRET: string;
  JWT_REFRESH_SECRET: string;
  PORT?: string;
  NODE_ENV?: string;
  FRONTEND_URL?: string;
}

export function validateEnv(): void {
  const required: (keyof RequiredEnvVars)[] = [
    'DATABASE_URL',
    'JWT_SECRET',
    'JWT_REFRESH_SECRET',
  ];

  const missing: string[] = [];

  for (const key of required) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(key => console.error(`   - ${key}`));
    console.error('\n💡 Create a .env file in the backend folder');
    console.error('   Copy from .env.example and fill in the values\n');
    process.exit(1);
  }

  // Validate JWT secrets are strong enough
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
    console.warn('⚠️  Warning: JWT_SECRET should be at least 32 characters long');
  }

  if (process.env.JWT_REFRESH_SECRET && process.env.JWT_REFRESH_SECRET.length < 32) {
    console.warn('⚠️  Warning: JWT_REFRESH_SECRET should be at least 32 characters long');
  }

  console.log('✅ Environment variables validated');
}
