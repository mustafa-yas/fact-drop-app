# Fact Drop

Fact Drop is a mobile application that generates interesting facts using the OpenAI API. The app is built with **React Native (Expo)** for the frontend and **Django Rest Framework (DRF)** for the backend.

## Features

- Generate random facts based on user input categories.
- AI-powered fact generation using OpenAI API.
- Modern mobile UI built with React Native (Expo).
- RESTful backend powered by Django Rest Framework.

## Tech Stack

### Frontend (React Native - Expo)

- React Native (Expo Router)
- TypeScript
- Axios for API calls

### Backend (Django - DRF)

- Django Rest Framework (DRF)
- OpenAI API integration
- Python Decouple for managing environment variables

## Installation

### Backend Setup (Django API)

1. Clone the repository:
   ```sh
   git clone https://github.com/mustafa-yas/fact-drop-app.git
   cd fact-drop-app/backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Set up environment variables using `python-decouple`:
   - Create a `.env` file in the backend folder:
     ```sh
     touch .env
     ```
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     ```
5. Run migrations:
   ```sh
   python manage.py migrate
   ```
6. Start the Django server:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup (Expo React Native)

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npx expo start
   ```

## API Endpoints

### Generate Fact

- **Endpoint:** `POST /api/generate-fact/`
- **Request Body:**
  ```json
  {
    "category": "space"
  }
  ```
- **Response:**
  ```json
  {
    "fact": "Space is a vacuum, meaning it has no air or atmosphere."
  }
  ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "New feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License.

---

Happy coding! 🚀

