# React OTP Verification

This is a single-page React application for OTP (One-Time Password) verification. Users can input a 6-digit OTP and submit it to verify their identity. The application makes an API call to validate the OTP, and upon success, displays a success message.

## Features

- Input field for entering a 6-digit OTP.
- API call to verify the entered OTP.
- Display of success message upon successful OTP verification.
- Error handling for failed OTP verification.

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Tailwind CSS (for styling)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    git clone https://github.com/developeryashmehta/Otp-verification.git

2. Navigate to the project directory:
    cd Otp-verification

3. Install dependencies:
    npm install

4. Start the development server:
    npm start

5. Open [http://localhost:3000] to view the application in your browser.

## API Documentation

The application makes an API call to verify the entered OTP. The API endpoint and request format are as follows:

## URL Query Parameters

The application supports passing a user ID via URL query parameters for different user verifications. You can include the user ID in the URL query parameters when navigating to the OTP verification page to verify a specific user's identity.

## Usage

To pass the user ID via URL query parameters, append `?id=<user-id>` to the URL of the OTP verification page, replacing `<user-id>` with the ID of the user you want to verify. For example: {domiain URL}/otp-verification?id=123456

## URL Query Parameters

The application makes an API call to verify the entered OTP. To configure the API endpoint URL, replace `'your_api_endpoint'` in the `handleSubmit` function with your actual API endpoint.

Make sure to replace 'your_api_endpoint' with the actual URL of your API endpoint. This ensures that the application correctly sends OTP verification requests to your API.

## Demo

https://developeryashmehta.github.io/Otp-verification

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.



