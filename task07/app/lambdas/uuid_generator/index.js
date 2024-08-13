import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({});
const BUCKET_NAME = "cmtr-8cca3a49-uuid-storage-test";

export const handler = async (event) => {
    const currentDate = new Date(); 
    const data = { ids: getUniqueIds() }
    console.log(JSON.stringify(data));

    const addFile = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: currentDate.toISOString(),
        Body: JSON.stringify(data),
    });

    try {
        const response = await client.send(addFile);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};

const getUniqueIds = () => {
    const ids = [];
    for (let i = 0; i < 10; i++) {
        ids.push(uuidv4());
    }
    return ids;
}
