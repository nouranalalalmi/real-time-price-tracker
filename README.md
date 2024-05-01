# RealTimePriceTracker

RealTimePriceTracker is a streamlined, multi-page web application built with React that tracks and displays the real-time prices of a small set of cryptocurrencies. It showcases the ability to work with React, APIs, WebSockets, routing, and unit tests.

## Features

- Tracks and displays real-time prices of selected cryptocurrencies.
- Supports WebSocket for real-time updates.
- Implements a simple navigation structure with Home and Details pages.
- Provides clean and intuitive UI with real-time price updates.
- Includes unit tests for key components and functionality.
- Focuses on core functionality within a 4-6-hour time frame.

## Technologies Used

- React: React is a popular JavaScript library for building user interfaces. Its component-based architecture makes it well-suited for modular development and efficient rendering.

- Zustand (for state management): Zustand is a lightweight state management library for React that emphasizes simplicity and minimalism. It allows for managing state without the complexity of larger state management solutions like Redux.

- Next.js (for routing and server-side rendering): Next.js is a React framework that provides features like server-side rendering, automatic code splitting, and simplified routing. It simplifies the setup of routing and can improve SEO and performance optimization.

- WebSocket API (for real-time updates): The RealTimePriceTracker uses the CoinCap WebSocket API to fetch real-time data for selected cryptocurrencies. CoinCap's WebSocket API provides various channels for subscribing to specific types of data, such as ticker data, trades, and order book updates.

- React Query (optional, for data fetching and caching): React Query is a data-fetching library for React that simplifies fetching, caching, synchronizing, and updating server state in your application. While optional in this project, it could be used for data fetching and caching, enhancing performance and reducing boilerplate code.

- Jest and React Testing Library (for unit tests): Jest and React Testing Library are testing frameworks compatible with React. They are used in this project for writing unit tests to ensure the quality and reliability of the application.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone <https://github.com/nouranalalalmi/real-time-price-tracker.git>
   ```

2. Navigate to the project directory:
   ```
   cd real-time-price-tracker
   ```
3. Install dependencies:
   ```
   yarn install
   ```
4. Start the development server:
   ```
   yarn dev
   ```
5. Open your browser and visit http://localhost:3000 to view the application.

### How to Use

1.  Home page: you'll see a list of available cryptocurrencies to track.
    Click on a cryptocurrency to view its real-time price and historical price trend.

2.  Details page.
    Prices will be updated in real-time using WebSocket.

### Contributing

#### Testing

To run unit tests, use the following command:

```
 yarn test
```

#### GitHub Workflows

This project uses GitHub Actions for continuous integration (CI) and continuous deployment (CD). The workflows are defined in the `.github/workflows` directory.

The CI workflow runs whenever a new commit is pushed to the repository. It checks out the code, installs the dependencies, and runs the tests.

The CD workflow runs whenever changes are merged into the main branch. It performs the same steps as the CI workflow, and if the tests pass, it deploys the application.

#### Signing Commits

This project uses GPG-signed commits for enhanced security and authenticity. To sign your commits, you'll need to [generate a GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) and [tell Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key).

Once you've set up your GPG key, you can sign your commits by adding the `-S` option to the `git commit` command:

```
git commit -S -m "Your commit message"
```
