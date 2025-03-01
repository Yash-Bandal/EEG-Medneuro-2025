# EEG-ITBS Performance and Analysis Dashboard

This project involves classifying EEG waves (Alpha, Beta, Theta, etc.) using a trained model [Random Forest] and visualizing behavioral performance metrics (Accuracy and Reaction Time) via a React-based dashboard.

## Features 
- **EEG Classification:** Model trained to classify EEG waves. 
- **Performance Metrics Dashboard:** Interactive dashboard built with React and Recharts library to visualize Accuracy vs. Reaction Time.
- **Data Selection:** Dropdown to choose among Participants representing different groups:
  - Active 2-Back (`A2B_performance_metrics.csv`)
  - Active 3-Back (`A3B_performance_metrics.csv`)
  - Sham 2-Back (`S2B_performance_metrics.csv`)
  - Sham 3-Back (`S3B_performance_metrics.csv`)

## Setup Instructions
Ensure Node version > 20 and npm >10  

### App Setup
npx create-react-app eeg-dashboard:
```bash
npx create-react-app eeg-dashboard
```
Go inside directory
```bash
cd eeg-dashboard
```

Install dependencies and start the React app:
```bash
npm install recharts papaparse tailwindcss@3.4.0

npx tailwindcss init
```
replace tailwind.configure.js 


and setup the App.js
and other src and componant files
use this..if script disabled
```bash
> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Start the App on server
```bash
npm start
```


