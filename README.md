## Table of contents

- [Overview](#overview)
- [Installation](#installation)

- [Technologies](#technologies)

## Overview

It was a simple shop application built with React and Typescript. The application allows users to view a list of products, add them to a cart, and proceed to checkout.

## Installation

Navigate to the project directory:

```bash
  cd  shop
```

Install dependencies using npm:

```bash
  npm install
```

Start the development server:

```bash
  npm run dev
```

## Technologies

- React.js
- TypeScript
- HTML5
- CSS3

## Approach

### The application is structured using modular components for better code organization and reusability. The main approach includes:

- Using React Router to handle navigation between the product list and the cart view.
- Implementing a separate cart page that allows users to edit quantities, remove items, and finalize purchases.
- Managing application-wide state (e.g., cart contents) using a global state management solution (e.g., React Context).

## Assumptions

- The product list displays only basic information (name, price and "Add to Cart" button).
- The cart is implemented as a separate route (/cart) with full product management functionality.
- Product data is either static. (no backend integration).
- Global state is used to persist the cart across pages and manage user actions consistently.
- All logic and styling were implemented without using any external libraries, as per the project requirements.
