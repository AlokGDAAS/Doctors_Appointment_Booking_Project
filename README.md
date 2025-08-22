🚀 Features
👨‍💻 User Portal

Browse doctors and check their availability without login

Sign up / Log in to book appointments

Update profile (name, email, phone, gender, date of birth, profile image)

Doctor specialization filters & advanced search

Book appointments by selecting date and time slot (if available)

Manage appointments:

View upcoming appointments

Cancel appointments

Pay consultation fees online (Razorpay demo integration)

Use UPI ID: success@razorpay for testing successful payment

🧑‍⚕️ Doctor Portal

Secure login with doctor’s email & password

Default credentials → firstname@gmail.com | 123456

Update profile details

View and manage assigned appointments

Cancel or mark appointments as completed

🛠️ Admin Portal

Login with credentials:

Email: alok@demo.com

Password: alokdemo123

Manage doctors:

Add new doctors

View doctor list and profiles

Manage appointments:

View all appointments

Cancel appointments if required

Monitor registered patients and their activities

🏗️ Project Structure
Doctors_Appointment_Booking_Project/
│
├── backend/        # Node.js + Express.js backend (API, DB, Authentication, Payment)
├── frontend/       # React.js frontend (User, Doctor, Admin interfaces)
└── README.md

💳 Demo Payment (Razorpay)

Test UPI ID for success → success@razorpay

Other demo IDs may simulate failed/cancelled transactions

⚙️ Tech Stack

Frontend: React.js, Tailwind CSS (UI), Axios

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token), bcrypt

Payment Gateway: Razorpay (Demo Integration)

Image Hosting: Cloudinary

📸 Screenshots (Optional)

(You can add screenshots here to make your README visually appealing, e.g., homepage, booking screen, admin dashboard.)

🔑 How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/Doctors_Appointment_Booking_Project.git
cd Doctors_Appointment_Booking_Project

2️⃣ Setup Backend
cd backend
npm install
npm run dev

3️⃣ Setup Frontend
cd frontend
npm install
npm start

4️⃣ Environment Variables

Create a .env file in backend/ with:

MONGODB_URI='mongodb+srv://alokkumar:alok123@cluster-june-26-2025.zdxpq2w.mongodb.net/prescripto'
CLOUDINARY_NAME='dznjyypoh'
CLOUDINARY_API_KEY='578358951129511'
CLOUDINARY_SECRET_KEY='oyCtV-Sj9CyGfLwZR-8myv2kvwM'
ADMIN_EMAIL='alok@demo.com'
ADMIN_PASSWORD='alokdemo123'
JWT_SECRET="greatstack"
RAZOR_PAY_KEY_ID='rzp_test_R8Enz5lG1fXJ9d'
RAZOR_PAY_KEY_SECRET='vnoYfqrgaNKEPH1hz6Ekkyb7'
CURRENCY = "INR"

✅ Future Improvements

Email & SMS notifications for appointment reminders

Video consultation feature



Payment receipt generation

👨‍🏫 Author

Alok Kumar
📧 Email: ankit25792kumar@gmail.com

📍 Location: Aligarh, Uttar Pradesh



