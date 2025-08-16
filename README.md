# Playwright Automation – Ruparupa Furniture Category

This project automates the **Ruparupa furniture category** pages (e.g., `kursi makan`) using **Playwright** with **TypeScript** and validates UI vs API data.

---

## Project Structure

```
.
├── fixtures/            # Playwright fixtures (login, page objects)
├── pages/               # Page Object Models
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── ProductPage.ts
├── tests/               # Test scripts
│   └── product.spec.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Features

* **Login**: Validates user login and greetings.
* **Navigation**: Hover and click through categories (Furniture → Kursi → Kursi Makan).
* **Filtering**:

  * Price (`minprice` and `maxprice`)
  * Locations (`Dki Jakarta`, `Kota Tangerang`)
  * Brands (`Informa`)
* **Sorting**: By `matching` or `lowestPrice`.
* **API Verification**:

  * Compares **UI product names** with **API response** from `beta.wapi.ruparupastg.my.id`.
* **Soft Reset**: Clears cookies/session to prevent UI test inconsistencies.

---

## Technologies Used

* **Playwright** – End-to-end testing framework
* **TypeScript** – Static typing
* **Axios** – API requests
* **Jest / Playwright Test Runner** – Test execution
* **Node.js** – Runtime environment

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/ruparupa-playwright.git
cd ruparupa-playwright
```

2. Install dependencies:

```bash
npm install
```

3. Compile TypeScript (optional):

```bash
npx tsc
```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a single test file

```bash
npx playwright test tests/product.spec.ts
```

### Run tests in headed mode (with browser UI)

```bash
npx playwright test --headed
```

---

## Test Highlights

### Test: Visit Category & Verify Products

1. Login as a user.
2. Navigate through Furniture → Kursi → Kursi Makan.
3. Verify URL and **50 product cards** are visible.

### Test: Filter & Compare UI vs API

1. Apply **location, price, and brand filters**.
2. Fetch API data via Axios with the same filters.
3. Assert **UI product names** match **API product names**.

### Test: Filter & Sort

1. Apply filters as above.
2. Apply **Sort by Harga Terendah**.
3. Fetch API data sorted by lowest price.
4. Assert UI vs API consistency.

---

## Notes

* To prevent **UI inconsistencies**, use `productPage.reset()` in `beforeEach()` to clear cookies and local/session storage.
* API endpoints are called via Axios with query parameters matching UI filters.
* Some SecurityErrors occur if `localStorage`/`sessionStorage` is accessed across origins; always navigate to the same origin first.

---

## References

* [Playwright Documentation](https://playwright.dev/)
* [Axios Documentation](https://axios-http.com/)
* [Ruparupa Beta Site](https://beta.www.ruparupastg.my.id)
