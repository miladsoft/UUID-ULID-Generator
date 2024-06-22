# UUID and ULID Generator

This project is a simple web application for generating UUIDs and ULIDs. It uses JavaScript to generate these unique identifiers and includes a stylish interface with HTML and CSS.

## Features

- Generate UUID (Universally Unique Identifier)
- Generate ULID (Universally Unique Lexicographically Sortable Identifier)

## Technologies Used

- HTML
- CSS
- JavaScript
- [ULID library](https://github.com/ulid/javascript) from jsDelivr CDN

## Setup and Usage

1. **Download the project:**

   Download the project files and extract the ZIP file.

2. **Open the project:**

   Open the `index.html` file in a web browser.

3. **Generate Identifiers:**

   - Click the "Generate UUID" button to generate a UUID.
   - Click the "Generate ULID" button to generate a ULID.

## Project Structure

```
UUID_ULID_Generator/
│
├── css/
│   └── styles.css
│
├── js/
│   └── scripts.js
│
├── index.html
└── README.md
```

### `index.html`

The main HTML file which includes the structure of the web page.

### `css/styles.css`

The CSS file which includes styles for the web page.

### `js/scripts.js`

The JavaScript file which includes the logic for generating UUIDs and ULIDs.

## External Libraries

This project uses the `ulid` library from the following CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/ulid@2.3.0/dist/index.umd.min.js"></script>
```

## License

This project is licensed under the MIT License.
