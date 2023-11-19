# Phone Number Checker

## Project Overview

Phone Number Checker is a web application that validates phone numbers and provides details like phone type and international formatting. The project consists of a C# backend and a React frontend with TypeScript and Material UI.

## Features

- Validate phone numbers for their correctness.
- Determine the type of phone number (mobile, home phone, etc.).
- Display the phone number in an international format.
- Download the validation results as a CSV file.

## Prerequisites

- .NET 5 or later for the backend.
- Node.js for the frontend.
- A modern web browser.

## Setting Up the Project

### Backend Setup

1. Ensure .NET 5 SDK is installed.
2. Navigate to the backend directory.
3. Run `dotnet restore` to install dependencies.
4. Start the backend server with `dotnet run`.

### Frontend Setup

1. Ensure Node.js is installed.
2. Navigate to the frontend directory.
3. Run `npm install` to install dependencies.
4. Start the frontend development server with `npm start`.

## Using the Application

- Open the web application hosted at `http://localhost:3000` (default React port).
- Enter a phone number and select a country code.
- Submit to validate and see the results.
- If valid, you can download the results as a CSV file.

## Backend API Endpoints

- `GET /phone/validate`: Validates the given phone number.
- `GET /country/supported`: Lists all supported countries.

## Technologies Used

- **Backend**: C#, .NET 5, ASP.NET
- **Frontend**: React, TypeScript, Material UI, Axios

## Comments

- Comments were made throughout the project where I struggled and why I used that method.
- Really keen to hear how I could've done parts when you've reviewed the code.
