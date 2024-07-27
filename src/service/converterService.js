import fs from 'fs';
import path from 'path';
import sharp from 'sharp';


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
                default:
                    throw new Error(`Unsupported target image type: ${imageType}`);
            }

            transformer.toFile(resultFileCompletePath);
        }
    }
}