## :ledger: Index

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Requirements](#requirements)
- [Installation](#installation)
- [License](#license)
- [Contact](#contact)

## :beginner: About The Project

This is streamlined, multi-page web application that tracks and displays the real-time prices of a small set of commodities.

## :screwdriver: Built With

This project is built using the following technologies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - A fast build tool for modern web projects
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript
- [styled-components](https://styled-components.com/) - A library for styling React components
- [React Router](https://reactrouter.com/) - A library for routing in React applications
- [Zustand](https://docs.pmnd.rs/zustand) - A library for state-management

## :point_up: Requirements

To install and run this project, you need:

- Node.js version 18.20 or higher
- Yarn version 4 or higher

## :hammer_and_wrench: Installation

If you would like to download the code and try it for yourself:

1. Clone the repository:
   ```sh
   git clone https://github.com/azad-source/m2-market-app.git
   ```
2. Install Yarn packages:
   ```sh
   yarn --frozen-lockfile
   ```
3. Add a `.env` file to the root of the project with the following variables:
   ```env
   VITE_KRAKEN_REST_API_URL="https://api.kraken.com"
   VITE_KRAKEN_API_KEY=*YourApiKey*
   VITE_KRAKEN_API_SECRET=*YourApiSecret*
   VITE_KRAKEN_WEBSOCKET_API_URL="wss://ws.kraken.com"
   ```
   The data is sourced from the trading platform provided by [Kraken](https://pro.kraken.com). You need to register on the platform, [create an API key](https://pro.kraken.com/app/settings/api), and insert the received key and secret into the variables in the `.env` file

## :scroll: License

M2-Market-App is [MIT licensed](License.txt).

## :mailbox_with_no_mail: Contact

E-mail: azad.63.mamedov@gmail.com

Linkedin: https://www.linkedin.com/in/azad-mamedov/
