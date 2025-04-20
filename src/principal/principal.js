import { menuSourceFormat, menuExpectedFormat, menuSourceFolder, menuDestinyFolder } from '../service/cliService.js';
import { convert } from '../service/converterService.js';

/**
 * Continuously displays the menu for selecting image conversion options and performs the conversion.
 * 
 * This function runs an infinite loop, prompting the user to select the source image format, target image format,
 * source directory, and destination directory. It then calls the `convert` function to perform the image conversion.
 */
export async function showMenu() {
    while (true) {
        let targetType = await menuSourceFormat();
        let expectedType = await menuExpectedFormat();
        let origin = await menuSourceFolder();
        let destiny = await menuDestinyFolder();

        convert(targetType, expectedType, origin, destiny);

    }
}