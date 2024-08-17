
# AdVenture Platform

Welcome to the AdVenture Platform! This project is a full-stack AdTech platform built with Django (backend) and React (frontend). The platform is designed to manage and display ads efficiently, incorporating features like SSP, DSP, RTB, and user management.

## Project Repository

[GitHub Repo](https://github.com/NoManNayeem/AdVenture.git)

## Features

### Backend (Django):
- **User Management:** Custom user model with roles (Publisher, Advertiser) and authentication.
- **SSP (Supply-Side Platform):** Manage ad slots, campaigns, and ad content.
- **DSP (Demand-Side Platform):** Manage bids, campaigns, and integrate with RTB.
- **RTB (Real-Time Bidding):** Handle real-time bidding processes for ads.
- **API Documentation:** Swagger integration for API documentation using `drf_yasg`.
- **CORS:** Configured CORS headers to allow cross-origin requests.

### Frontend (React):
- **Responsive UI:** Responsive design using Material-UI to ensure a seamless experience across devices.
- **Ad Management:** Display ads based on ad slots, including text, image, and HTML content.
- **Campaign Management:** Interface for managing ad campaigns and bids.
- **Real-Time Bidding:** Visual interface for handling RTB activities.
- **Navigation:** Enhanced navigation with a side drawer for mobile devices and a consistent theme across the app.

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/NoManNayeem/AdVenture.git
cd AdVenturePlatform
```

### 2. Backend Setup (Django)

#### 2.1. Create and Activate Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

#### 2.2. Install Backend Dependencies
```bash
cd AdVenture
pip install -r requirements.txt
```

#### 2.3. Run Migrations and Start the Django Server
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
The backend should now be running at `http://127.0.0.1:8000/`.

### 3. Frontend Setup (React)

#### 3.1. Install Frontend Dependencies
```bash
cd ../adventure-frontend
npm install
```

#### 3.2. Start the React Development Server
```bash
npm start
```
The frontend should now be running at `http://localhost:3000/`.

## Usage

- **Access the Django Admin Panel:** Navigate to `http://127.0.0.1:8000/admin/` to manage the backend data.
- **View and Manage Ads:** Access the frontend at `http://localhost:3000/` to manage and display ads.

## Contributing

If you wish to contribute to the project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any inquiries, please reach out to the project maintainer at [email@example.com](mailto:email@example.com).
