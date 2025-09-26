# 🏥 XCall Hospital Dashboard

A modern, professional hospital administration dashboard built with Next.js, inspired by Flipkart Seller Hub's clean and intuitive design. This comprehensive dashboard provides SMS Hospital with powerful tools to manage appointments, patients, doctors, and hospital operations efficiently.

![Dashboard Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-38B2AC)

## ✨ Features

### 📊 **Dashboard Overview**
- **Real-time KPI Cards** - Today's appointments, new patients, repeated visits, cancellations
- **Interactive Charts** - Line charts for appointment trends, bar charts for doctor workload
- **Trend Indicators** - Visual percentage changes compared to previous day

### 👥 **Patient Management**
- **Patient Slider** - Horizontal scrollable cards showing patient details
- **Status Tracking** - Waiting, In-Progress, Completed status indicators
- **Import/Sync Tools** - CSV import and call sync functionality
- **Patient Profiles** - Age, contact info, medical issues, assigned doctors

### 👨‍⚷ **Doctor Management**
- **Availability Status** - Online, Busy, Offline indicators with colored dots
- **Auto-Assignment** - Smart patient-to-doctor assignment system
- **Performance Metrics** - Patients handled, average response time
- **Workload Distribution** - Visual representation of doctor capacity

### 🔔 **Notifications & Alerts**
- **Multi-channel Alerts** - WhatsApp, SMS, Call, Emergency notifications
- **Priority System** - High, Medium, Low priority color coding
- **Missed Callbacks** - Track and manage follow-up calls
- **Real-time Updates** - Live notification feed

### 📈 **Analytics & Reports**
- **Patient Feedback** - Rating system with insights
- **Report Generation** - Daily, Weekly, Monthly reports
- **Performance Analytics** - Hospital efficiency metrics
- **Downloadable Reports** - PDF/Excel export functionality

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.4 with App Router
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 4.1.13
- **Charts:** Recharts for interactive data visualization
- **Icons:** Lucide React for consistent iconography
- **UI Components:** Custom components with shadcn/ui inspiration
- **State Management:** React hooks and context
- **Authentication:** JWT-based auth utilities (ready for integration)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankitrraj/x-call-hospital.git
   cd x-call-hospital
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
x-call-hospital/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main dashboard page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   │   ├── button.tsx    # Button component
│   │   └── card.tsx      # Card component
│   ├── Layout.tsx        # Main layout wrapper
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Navbar.tsx        # Top navigation bar
│   ├── KPICards.tsx      # Dashboard KPI cards
│   ├── ChartsSection.tsx # Charts and analytics
│   ├── PatientSlider.tsx # Patient management
│   ├── DoctorSection.tsx # Doctor management
│   └── NotificationsSection.tsx # Alerts & notifications
├── lib/                  # Utility functions
│   ├── api.ts           # API helper functions
│   ├── auth.ts          # Authentication utilities
│   └── utils.ts         # General utilities
├── public/              # Static assets
└── package.json         # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Orange:** `#F97316` - Buttons, highlights, active states
- **Primary Blue:** `#3B82F6` - Charts, links, info elements
- **Success Green:** `#10B981` - Success states, positive trends
- **Warning Yellow:** `#F59E0B` - Warnings, pending states
- **Danger Red:** `#EF4444` - Errors, critical alerts
- **Gray Scale:** `#F9FAFB` to `#111827` - Text, backgrounds, borders

### Typography
- **Font Family:** Inter (system font fallback)
- **Headings:** Bold, 24px-32px
- **Body Text:** Regular, 14px-16px
- **Captions:** Medium, 12px-14px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### API Integration
The dashboard is ready for backend integration with pre-built API utilities:

```typescript
// Example API usage
import { api } from '@/lib/api';

// Fetch appointments
const appointments = await api.getAppointments();

// Get dashboard stats
const stats = await api.getDashboardStats();
```

## 📱 Responsive Design

- **Desktop:** Full dashboard with all features
- **Tablet:** Responsive grid layout, collapsible sidebar
- **Mobile:** Stacked layout, mobile-optimized navigation

## 🔒 Security Features

- JWT token management
- Role-based access control (Admin, Receptionist, Doctor)
- Secure API request handling
- Input validation and sanitization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic CI/CD

### Manual Deployment
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer:** [Ankit Raj](https://github.com/ankitrraj)
- **Hospital:** SMS Hospital
- **Project:** XCall Hospital Management System

## 📞 Support

For support and queries:
- 📧 Email: admin@smshospital.com
- 🐛 Issues: [GitHub Issues](https://github.com/ankitrraj/x-call-hospital/issues)
- 📖 Documentation: [Wiki](https://github.com/ankitrraj/x-call-hospital/wiki)

---

<div align="center">
  <strong>Built with ❤️ for SMS Hospital</strong><br>
  <sub>Modern Healthcare Management Dashboard</sub>
</div>
