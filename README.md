# Unit Converter

A simple, lightweight web app for converting between common units of **length**, **weight**, and **temperature**. Built with vanilla JavaScript and styled with Bootstrap 5.

**Repository:** https://github.com/AbdElrahmanTarek112/unit-converter

This project is a solution to the [Unit Converter](https://roadmap.sh/projects/unit-converter) project challenge from [roadmap.sh](https://roadmap.sh).

---

## Features

- Three conversion categories, switchable from a tab-style navigation:
  - **Length:** Meters, Feet, Inches, Kilometers, Miles
  - **Weight:** Kilograms, Pounds, Ounces, Grams
  - **Temperature:** Celsius, Fahrenheit, Kelvin
- Dynamic "from" and "to" dropdowns that update with the selected category
- Input validation: the number field is required, and minimum values are set per category (for example, no temperature below absolute zero)
- Clean, responsive layout using Bootstrap 5 and the Nunito font
- No build step and no dependencies to install

## Tech Stack

| Layer   | Technology                          |
| ------- | ----------------------------------- |
| Markup  | HTML5                               |
| Styling | CSS3, Bootstrap 5.3                 |
| Logic   | Vanilla JavaScript (ES6)            |
| Fonts   | Google Fonts (Nunito, Varela Round) |

## Getting Started

### Prerequisites

Any modern web browser. No Node.js or package manager is required.

### Installation

```bash
# Clone the repository
git clone https://github.com/AbdElrahmanTarek112/unit-converter.git

# Move into the project folder
cd unit-converter
```

### Run

Open `index.html` in your browser, either by double-clicking it or with a local server such as the VS Code **Live Server** extension.

## Usage

1. Choose a category: **Length**, **Weight**, or **Temperature**.
2. Enter the value you want to convert.
3. Select the unit to convert **from**.
4. Select the unit to convert **to**.
5. Click **Convert** to see the result.

## Project Structure

```
unit-converter/
├── index.html   # Page structure and form
├── style.css    # Custom styles on top of Bootstrap
├── script.js    # Category switching and conversion logic
└── README.md
```

## How It Works

- **Length and weight** use a base-unit approach. Every unit has a factor relative to a base unit (meters for length, kilograms for weight). A value is converted with:

  ```
  result = value × (factor[from] / factor[to])
  ```

- **Temperature** is converted through Celsius as an intermediate step, since the formulas between Celsius, Fahrenheit, and Kelvin are not simple ratios.

## Roadmap

- [ ] Display the result on the page instead of in an `alert`
- [ ] Load the default unit lists on first page load
- [ ] Add a "swap units" button
- [ ] Add more categories (volume, speed, time, area)
- [ ] Refactor the three category functions into one reusable function
- [ ] Add dark mode

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

## Author

**Abdelrahman Tarek Faty**
GitHub: [@AbdElrahmanTarek112](https://github.com/AbdElrahmanTarek112)
