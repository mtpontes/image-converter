import fs from 'fs';
import { input } from '@inquirer/prompts';
import { select, Separator } from '@inquirer/prompts';

function constructChoices() {
    const extensions = new Map([
        ["jpg", ".jpg"],
        ["jpeg", ".jpeg"],
        ["png", ".png"],
        ["webp", ".webp"],
        ["avif", ".avif"],
        ["svg", ".svg"]
    ]);

    return [...extensions.keys()].map((key, index) =>
        ({ 
            name: key, 
            value: extensions.get(key)
        })
    );
}

/**
 * Displays a menu to select the source image format.
 *
 * @returns {Promise<string>} The selected image format.
 */
export async function menuSourceFormat() {
    return select({
        message: "Choose what type of image you want to convert",
        choices: constructChoices()
    });
}


/**
 * Displays a menu to select the expected image format.
 *
 * @returns {Promise<string>} The selected image format.
 */
export async function menuExpectedFormat() {
    return select({
        message: "Choose which type you want to convert to",
        choices: constructChoices()
    });
}

/**
 * Prompts the user to enter the source directory of the images.
 * @returns {Promise<string>} The source directory path.
 */
export async function menuSourceFolder() {
    return await input({
        message: "Enter the source directory of the images",
        required: true,
        validate: (value) => {
            if (value == null) return "Cannot be null"
            if (value.trim() === '') return "Cannot be blank"
            if (!fs.existsSync(value)) return `Directory not found: ${value}`
            return true;
        }
    });
}

/**
 * Prompts the user to enter the destination directory of the images.
 * If the directory does not exist, it will be created.
 * @returns {Promise<string>} The destination directory path.
 */
export async function menuDestinyFolder() {
    const defaultDestination = "./default_destination";
    let destiny = await input({
        message: "Enter the destination directory of the images",
        default: defaultDestination,
        required: false,
        validate: value => {
            if (value != null && value.trim() !== '') {
                if (!fs.existsSync(value)) 
                    fs.mkdir(destiny, { recursive: true });
            }
            return true;
        }
    });
    if (!fs.existsSync(defaultDestination)) {
        fs.mkdir(defaultDestination, { recursive: true });
    }

    return destiny;
}