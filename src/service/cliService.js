import fs from 'fs';
import { input } from '@inquirer/prompts';
import { select, Separator } from '@inquirer/prompts';

function constructChoices() {
    const extensions = new Map([
        ["jpg", ".jpg"],
        ["jpeg", ".jpeg"],
        ["png", ".png"],
        ["webp", ".webp"],
    ]);

    return [...extensions.keys()].map((key, index) =>
        ({ 
            name: key, 
            value: extensions.get(key)
        })
    );
}

export async function menuSourceFormat() {
    return select({
        message: "Choose what type of image you want to convert",
        choices: constructChoices()
    });
}

export async function menuExpectedFormat() {
    return select({
        message: "Choose which type you want to convert to",
        choices: constructChoices()
    });
}

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