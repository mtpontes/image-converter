# Image Converter

This is a fast and straightforward cli client. This CLI helps to convert images from one format to another, capturing all image files in the directory with the target format and converting them to the desired format. I created this CLI for personal use and am now making it publicly available.

## 🚀 Installation

Run the command:

    git clone https://github.com/mtpontes/image-converter.git

Install the dependencies:

    npm install

Run the CLI:

    node cli.js

## ⚙️ Main Functions

| Function              | Input  | Required | Description                                                                          |
|-----------------------|--------|----------|--------------------------------------------------------------------------------------|
| `menuSourceFormat`    | string | true     | Menu to choose the image format to be converted                                      |
| `menuExpectedFormat`  | string | true     | Menu to choose the desired image format                                              |
| `menuSourceFolder`    | string | true     | Prompts for the address where the images to be converted are located and validates the address. Example input: `E:\images` |
| `menuDestinyFolder`   | string | false    | Prompts for the destination directory of the images. If no destination directory is specified, the conversions will be sent to the **default_destination** directory at the project root |

## 🤔  FAQ

- **Question**: What happens if the destination directory does not exist?
    - **Answer**: The CLI will create the destination directory if it does not exist.