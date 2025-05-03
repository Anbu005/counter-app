# 🧮 Counter App – Jr Software Engineer Coding Test

A simple counter application built with **Angular**.

---

## 📌 Objective

Build a Counter App that allows users to increment, decrement, and reset a counter. The application also keeps track of all changes and displays a history log.

---

## 🧑‍💻 Features

### ✅ Counter Component
- Displays the current counter value
- Provides three controls:
  - ➕ **Increment** (+1)
  - ➖ **Decrement** (–1)
  - 🔄 **Reset** (set to 0)

### ✅ History Tracking
- Logs every change to the counter with details
  - Example:  
    ```
    1. [+1] Counter is now 1  
    2. [-1] Counter is now 0  
    3. [Reset] Counter is now 0
    ```

### ✅ Clear History
- A button to clear the entire counter history

### ✅ Styling
- Clean and responsive layout using **Bootstrap 5**
- Mobile-friendly with media queries in SCSS

---

## 🛠️ Tech Stack

- **Angular** (vX.X.X)
- **Bootstrap 5**
- **SCSS**

---

## 📦 Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/counter-app.git

# Navigate to the project directory
cd counter-app

# Install dependencies
npm install

# Run the application
ng serve
