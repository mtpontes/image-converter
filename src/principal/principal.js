import { targetTypeMenu, expectedTypeMenu, menuOriginFolder, menuDestinyFolder } from '../service/cliService.js';
import { convert } from '../service/converterService.js';

export async function showMenu() {
    while (true) {
        let targetType = await targetTypeMenu();
        let expectedType = await expectedTypeMenu();
        let origin = await menuOriginFolder();
        let destiny = await menuDestinyFolder();

        convert(targetType, expectedType, origin, destiny);
    }
}