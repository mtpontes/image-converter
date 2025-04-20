import fs from 'fs';
import path from 'path';
import sharp from 'sharp';


/**
 * Converts images from a target type to an expected type within the specified directories.
 *
 * @param {string} targetType - The original file extension of the images to be converted (e.g., ".jpg").
 * @param {string} expectedType - The target file extension for the converted images (e.g., ".png").
 * @param {string} origin - The source directory containing the images to be converted.
 * @param {string} destiny - The destination directory where the converted images will be saved.
 * @throws Will throw an error if the target image type is unsupported.
 */
export async function convert(targetType, expectedType, origin, destiny) {
    const files = fs.readdirSync(origin);

    for (const file of files) {
        const filepath = path.join(origin, file);
        const fileExtension = path.extname(file).toLowerCase();

        if(fs.statSync(filepath).isFile && fileExtension === targetType) {
            const resultFileCompleteName = 
                path.parse(file).name.concat(expectedType);
            const resultFileCompletePath = 
                path.join(destiny, resultFileCompleteName);

            const inputBuffer = fs.readFileSync(filepath);

            const imageType = expectedType.replace('.', '');
            let transformer;
            switch (imageType) {
                case 'jpg':
                case 'jpeg':
                    transformer = sharp(inputBuffer).jpeg();
                    break;
                case 'png':
                    transformer = sharp(inputBuffer).png();
                    break;
                case 'webp':
                    transformer = sharp(inputBuffer).webp();
                    break;
                case 'webp':
                    transformer = sharp(inputBuffer).avif();
                    break;
                case 'webp':
                    transformer = sharp(inputBuffer).svg();
                    break;
                default:
                    throw new Error(`Unsupported target image type: ${imageType}`);
            }

            transformer.toFile(resultFileCompletePath);
        }
    }
}