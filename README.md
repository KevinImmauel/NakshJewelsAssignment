# Nkash Jewels Intern Assignment - Full Stack Products Management

A full-stack web application for managing products with a React frontend and Express.js backend API. This project demonstrates CRUD operations, modern UI design, and RESTful API architecture.

## 🛠 Tech Stack

### Frontend
- **Next.js** - React framework for production
- **React** - UI library
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **CSS Modules/Tailwind** - Styling

### Backend
- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **File System (fs)** - JSON file-based storage
- **Node.js** - Runtime environment

## 📁 Project Structure

```
geer-intern-assignment/
├── frontend/                   # Next.js Frontend Application
│   ├── components/
│   │   ├── ProductCard.js
│   │   ├── ProductForm.js
│   │   └── ProductList.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── products/
│   │   └── api/
│   ├── styles/
│   ├── package.json
│   └── README.md
├── backend/                    # Express.js Backend API
│   ├── server.js
│   ├── demoindex.js
│   ├── package.json
│   ├── .env
│   ├── data/
│   │   └── products.json
│   ├── src/
│   │   ├── controllers/
│   │   │   └── productController.js
│   │   ├── middleware/
│   │   │   └── validation.js
│   │   ├── routes/
│   │   │   └── productRoutes.js
│   │   ├── services/
│   │   │   └── productService.js
│   │   └── utils/
│   │       └── fileUtils.js
│   └── config/
│       └── database.js
└── README.md                   # This file
```

## 🔧 Prerequisites

- **Node.js** (version 16.x or higher)
- **npm** or **yarn**
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository
```cmd
git clone https://github.com/KevinImmauel/NakshJewelsAssignment.git
cd NakshJewelsAssignment
```

### 2. Backend Setup
```cmd
cd backend
npm install
```

### 3. Frontend Setup
```cmd
cd ..\frontend
npm install
```

## 🏃‍♂️ How to Run the Project

### Option 1: Run Both Services Simultaneously

**Terminal 1 - Backend Server:**
```cmd
cd backend
node server.js
```
Backend will run on `http://localhost:5000`

**Terminal 2 - Frontend Application:**
```cmd
cd frontend
npm run dev
```
Frontend will run on `http://localhost:3000`

## 🧪 API Testing Guide

### Using Windows Command Prompt/PowerShell

#### 1. Get All Products
```cmd
curl -X GET http://localhost:5000/api/products
```

#### 2. Create a New Product
```cmd
curl -X POST http://localhost:5000/api/products ^
-H "Content-Type: application/json" ^
-d "{\"name\":\"Wireless Headphones\",\"price\":99.99,\"imageUrl\":\"https://example.com/headphones.jpg\"}"
```

#### 3. Get Product by ID
```cmd
curl -X GET http://localhost:5000/api/products/1
```

#### 4. Delete Product
```cmd
curl -X DELETE http://localhost:5000/api/products/1
```

### Alternative: Using PowerShell (Invoke-RestMethod)

#### Get All Products
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/products" -Method GET
```

#### Create Product
```powershell
$body = @{
    name = "Gaming Mouse"
    price = 59.99
    imageUrl = "https://example.com/mouse.jpg"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/products" -Method POST -Body $body -ContentType "application/json"
```

#### Delete Product
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/products/2" -Method DELETE
```

## ✨ Features

### Frontend Features
- **Product Listing**: Display all products in a responsive grid
- **Add Product**: Form to create new products
- **Edit Product**: Inline editing capabilities
- **Delete Product**: Remove products with confirmation
- **Search & Filter**: Find products quickly
- **Responsive Design**: Works on mobile and desktop
- **Loading States**: User feedback during API calls
- **Error Handling**: Graceful error display

### Backend Features
- **RESTful API**: Standard HTTP methods and status codes
- **Input Validation**: Comprehensive data validation
- **Error Handling**: Proper error responses
- **CORS Support**: Cross-origin requests enabled
- **File-based Storage**: JSON file persistence
- **Auto ID Generation**: Unique product IDs
- **Modular Architecture**: Clean, maintainable code

## 🛠 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/products` | Get all products | - |
| GET | `/api/products/:id` | Get product by ID | - |
| POST | `/api/products` | Create new product | `{name, price, imageUrl}` |
| DELETE | `/api/products/:id` | Delete product | - |

## 📝 Notes & Assumptions

### Design Decisions
1. **File-based Storage**: Used JSON files instead of a database for simplicity and easy setup
2. **Modular Backend**: Separated concerns with controllers, services, and utilities
3. **Client-side State**: React state management for real-time UI updates
4. **Responsive UI**: Mobile-first design approach

### Assumptions
1. **Image URLs**: Products use external image URLs (not file uploads)
2. **No Authentication**: Public API without user authentication
3. **Browser Compatibility**: Modern browsers supporting ES6+

### Known Limitations
1. **Concurrent Access**: File-based storage may have race conditions
2. **Image Validation**: URLs are not validated for actual images
3. **Data Persistence**: No backup mechanism for JSON files

### Future Enhancements
- Database integration (PostgreSQL/MongoDB)
- Image upload functionality
- User authentication & authorization
- Product categories and tags
- Advanced search and filtering
- Data export/import features

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/561aae65-6bfe-4312-a055-f639a9d69d69)

![image](https://github.com/user-attachments/assets/da8e9b2a-5717-4d74-a2c3-f1cc593c5a22)

![image](https://github.com/user-attachments/assets/2d684b7a-d542-45bb-b6c4-88289f4c3fce)

![image](https://github.com/user-attachments/assets/aaccfeb8-734b-486f-ac63-8dcc94304aae)

![image](https://github.com/user-attachments/assets/9a64c2b0-17ae-490c-a844-5f1850c8622b)



### Frontend Application
- Home page with product grid
- Responsive mobile view

### API Testing
- Successful API responses
- Error handling examples

## 🔍 Testing the Complete Flow

1. **Start both servers** (backend on :5000, frontend on :3000)
2. **Open frontend** in browser: `http://localhost:3000`
3. **Test API directly** using the curl commands above
4. **Verify data persistence** by restarting servers and checking data

### Common Issues

**Port Already in Use:**
```cmd
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**CORS Errors:**
- Ensure backend CORS is configured for frontend URL
- Check if both servers are running

**Module Not Found:**
```cmd
cd backend
npm install
cd ..\frontend
npm install
```

**Data File Issues:**
```cmd
cd backend\data
del products.json
echo {"products": []} > products.json
```

## 📞 Support

For any issues or questions:
1. Check the console logs in both frontend and backend
2. Verify all dependencies are installed
3. Ensure ports 3000 and 5000 are available
4. Review the API testing examples above

---

**Author**: Kevin Immanuel M  
**Assignment**: Naksh Jewels Intern Assignment  
**Date**: 21 June 2025  
**Repository**: [[GitHub Link](https://github.com/KevinImmauel/NakshJewelsAssignment)]
