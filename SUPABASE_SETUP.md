# 🎯 Supabase Connection Setup Guide

## Step 1: Get Connection String from Supabase

### Option A: From Dashboard (Easiest)

1. **Open Supabase Dashboard**
   - Go to: https://supabase.com/dashboard
   - Select your project: `rajoria81@gmail.com's Project`

2. **Navigate to Database Settings**
   ```
   Left Sidebar → Click "Database" icon (cylinder icon)
   OR
   Click "Project Settings" (gear icon) → Database
   ```

3. **Find Connection String**
   ```
   Scroll down to "Connection string" section
   Select: "URI" format
   ```

4. **Copy the Connection String**
   ```
   Format will be:
   postgresql://postgres:[YOUR-PASSWORD]@db.abcdefghijk.supabase.co:5432/postgres
   
   OR (pooler format):
   postgresql://postgres.abcdefghijk:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres
   ```

5. **Replace Password**
   ```
   Replace [YOUR-PASSWORD] with the password you set during project creation
   
   If you forgot password:
   - Go to Database Settings
   - Click "Reset database password"
   - Set new password
   ```

---

## Step 2: Create `.env` File

### Location: `backend/.env`

```env
# Database Configuration
DATABASE_URL="postgresql://postgres:YOUR_ACTUAL_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres"

# JWT Configuration
JWT_SECRET="withcaring-hospital-jwt-secret-key-2025-minimum-32-characters-long"
JWT_REFRESH_SECRET="withcaring-refresh-token-secret-2025-also-32-characters-long"
JWT_EXPIRES_IN="7d"
JWT_REFRESH_EXPIRES_IN="30d"

# Server Configuration
PORT=3001
NODE_ENV="development"

# CORS Configuration
FRONTEND_URL="http://localhost:3000"
```

### Example (with fake values):
```env
DATABASE_URL="postgresql://postgres:MySecurePass123@db.abcdefghijk.supabase.co:5432/postgres"
```

---

## Step 3: Test Connection

### 3.1: Install Dependencies (if not done)
```bash
cd backend
npm install
```

### 3.2: Validate Prisma Schema
```bash
npx prisma validate
```

**Expected Output:**
```
✔ Prisma schema loaded from prisma\schema.prisma
✔ Environment variable DATABASE_URL available
✔ Prisma schema is valid
```

### 3.3: Run Migration (Create Tables)
```bash
npx prisma migrate dev --name init
```

**What this does:**
- Connects to Supabase
- Creates all tables:
  - hospitals
  - users
  - doctors
  - patients
  - appointments
  - hospital_settings
  - audit_logs
- Sets up relationships
- Creates indexes

**Expected Output:**
```
✔ Prisma Migrate applied the following migration(s):
  └─ 20250114_init
✔ Generated Prisma Client
```

### 3.4: Generate Prisma Client
```bash
npx prisma generate
```

### 3.5: Open Prisma Studio (View Database)
```bash
npx prisma studio
```

Opens browser at `http://localhost:5555` to view/edit data!

---

## Step 4: Verify in Supabase Dashboard

1. **Go back to Supabase Dashboard**
2. **Click "Table Editor"** (left sidebar)
3. **You should see 7 tables:**
   - ✅ hospitals
   - ✅ users
   - ✅ doctors
   - ✅ patients
   - ✅ appointments
   - ✅ hospital_settings
   - ✅ audit_logs

---

## 🔧 Troubleshooting

### Error: "Environment variable not found: DATABASE_URL"
**Solution:** `.env` file not created or in wrong location
```bash
# Check if file exists
ls backend/.env

# If not, create it manually in VS Code
```

### Error: "Authentication failed"
**Solution:** Wrong password in DATABASE_URL
```bash
# Reset password in Supabase Dashboard
# Update .env file with new password
```

### Error: "Connection timeout"
**Solution:** Check internet connection or firewall
```bash
# Test connection
ping db.YOUR_PROJECT_REF.supabase.co
```

### Error: "SSL connection required"
**Solution:** Add `?sslmode=require` to DATABASE_URL
```env
DATABASE_URL="postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres?sslmode=require"
```

---

## 📊 What You'll Have After Setup

```
SUPABASE DATABASE:
├── 7 tables created
├── All relationships set up
├── Indexes created
├── Multi-tenancy ready
└── Ready for data!

LOCAL BACKEND:
├── Prisma Client generated
├── TypeScript types created
├── Ready to query database
└── Can run migrations
```

---

## 🎯 Next Steps After Connection

1. **Create Seed File** - Add 10 test hospitals
2. **Build Authentication API** - Login/Register
3. **Create CRUD APIs** - Appointments, Patients, Doctors
4. **Connect Frontend** - Integrate with Next.js

---

## 📝 Quick Reference

### Connection String Format:
```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

### Your Values:
```
USER: postgres
PASSWORD: [Your password]
HOST: db.YOUR_PROJECT_REF.supabase.co
PORT: 5432
DATABASE: postgres
```

### Common Commands:
```bash
# Validate schema
npx prisma validate

# Create migration
npx prisma migrate dev --name migration_name

# Generate client
npx prisma generate

# Open studio
npx prisma studio

# Reset database (careful!)
npx prisma migrate reset
```

---

## ✅ Checklist

- [ ] Supabase project created
- [ ] Connection string copied
- [ ] `.env` file created in `backend/` folder
- [ ] Password replaced in DATABASE_URL
- [ ] `npm install` completed
- [ ] `npx prisma validate` successful
- [ ] `npx prisma migrate dev` successful
- [ ] Tables visible in Supabase dashboard
- [ ] Prisma Studio opens successfully

---

**Once all checkboxes are ✅, your database is ready!** 🎉
