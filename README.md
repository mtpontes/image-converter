# Image Converter

This is a fast and straightforward CLI client. This CLI helps you convert images from one format to another by taking all the image files in the target format directory and converting them to the desired format. I created this CLI for personal use and am now making it publicly available. I use it in situations where I need to convert batches of images to another format, so if that's what you need, it should help you.

## 🔎 Image formats

- JPG/JPEG
- PNG
- WEBP
- AVIF
- SVG

## ⚙️ Main Functions

| Function              | Input  | Required | Description                                                                          |
|-----------------------|--------|----------|--------------------------------------------------------------------------------------|
| `menuSourceFormat`    | string | true     | Menu to choose the image format to be converted                                      |
| `menuExpectedFormat`  | string | true     | Menu to choose the desired image format                                              |
| `menuSourceFolder`    | string | true     | Prompts for the address where the images to be converted are located and validates the address. Example input: `E:\images` |
| `menuDestinyFolder`   | string | false    | Prompts for the destination directory of the images. If no destination directory is specified, the conversions will be sent to the **default_destination** directory at the project root |

## 📦 Installation

### 📋 Prerequisites

- npm
- Node 22 (may also work on versions higher than 12.0)

### 🚀 Run
Clone the repository:

    git clone https://github.com/mtpontes/image-converter.git

Install the dependencies:

    npm install

Run the CLI:

    node index.js

## 🤔  FAQ

- **Question**: What happens if the destination directory does not exist?
    - **Answer**: The CLI will create the destination directory if it does not exist.
