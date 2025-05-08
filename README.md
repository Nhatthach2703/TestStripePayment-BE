# TestStripePayment-BE

This is a Node.js-based server for handling Stripe payment processing. It provides APIs for creating payment intents and retrieving the Stripe publishable key.

## Features

- **Retrieve Publishable Key**: An endpoint to fetch the Stripe publishable key.
- **Create Payment Intent**: An endpoint to create a payment intent with Stripe, including customer creation and payment intent association.

## Prerequisites

- Node.js (v14 or later)
- A Stripe account with API keys

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd TestStripePayment-BE
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure it as follows:
   ```env
   PORT=3000
   STRIPE_SECRET_KEY=Your_Stripe_Secret_Key
   STRIPE_PUBLISHABLE_KEY=Your_Stripe_Publishable_Key
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000` by default.

## API Endpoints

### 1. Get Publishable Key
- **URL**: `/api/payment/get-publishable-key`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "publishableKey": "Your_Stripe_Publishable_Key"
  }
  ```

### 2. Create Payment Intent
- **URL**: `/api/payment/create-payment-intent`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "amount": 1000,
    "name": "John Doe",
    "description": "Test Payment"
  }
  ```
- **Response**:
  ```json
  {
    "clientSecret": "<client_secret>"
  }
  ```

## Dependencies

- `express`: Web framework for Node.js
- `dotenv`: Loads environment variables from a `.env` file
- `stripe`: Stripe API library
- `cors`: Enables Cross-Origin Resource Sharing
- `morgan`: HTTP request logger middleware
- `cookie-parser`: Parses cookies attached to the client request object

## License

This project is licensed under the MIT License.