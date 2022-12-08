
import shortId from "shortid"
import fs  from 'fs'
import mkdirp from 'mkdirp'
import sharp from 'sharp'
import  path from 'path'
import  { GraphQLUpload }  from 'apollo-upload-server';
/*
const { ASSETS_PATH } = require('../../main')
*/
import  {createWriteStream }from 'fs'
/*const { createWriteStream, unlinkSync , createReadStream } = require('fs')*/

import {createReadStream} from "fs"


const UPLOAD_DIR = './uploads'
const uploads = []
mkdirp.sync(UPLOAD_DIR)

/*const LOCAL_DIR = path.resolve('');*/
export const resolvers = {


    Upload: GraphQLUpload,

    Query: {
        /*  images: () => api.images,*/

        uploads: () => uploads},
        Mutation: {

            singleUpload: async (parent, { file }) => {




                const { filename , id,   photoURL  } = await file;










           /*     const writeStream = fs.createWriteStream(UPLOAD_DIR)


                console.log(writeStream)*/

       /*         const stream = fs.createReadStream('../uploads/' , {

                    file,
                    filename,
                    photoURL


                });*/
       /*         const storedFileName = `${shortId.generate()}-${filename}`;*/

                const data = fs.createReadStream(path.join("../uploads", filename));

                const storedFileUrl = path.join("uploads", filename)


              fs.createWriteStream(storedFileUrl)

                console.log(storedFileUrl)
                console.log(data)
                file = uploads.length+1;

                uploads.push({
                    file,
                    filename,
                    photoURL,
                    id
                });


                return {
                    filename,
                    photoURL,
                    id,
                    file,


                }








        /*            const storedFileName = `${shortId.generate()}-${filename}`;
                const data = fs.createReadStream(path.join("../uploads", storedFileName));

                const storedFileUrl = path.join("../uploads", storedFileName);*/


/*                await new Promise((resolve, reject) => {
                    // Create a stream to which the upload will be written.
                    const writeStream = createWriteStream(storedFileUrl);

                    // When the upload is fully written, resolve the promise.
                    writeStream.on("finish", resolve);

                    // If there's an error writing the file, remove the partially written file
                    // and reject the promise.
                    writeStream.on("error", (error) => {
                        unlink(storedFileUrl, () => {
                            reject(error);
                        });
                    });

                    // In Node.js <= v13, errors are not automatically propagated between piped
                    // streams. If there is an error receiving the upload, destroy the write
                    // stream with the corresponding error.
                    data.on("error", (error) => writeStream.destroy(error));

                    // Pipe the upload into the write stream.
                   data.pipe(writeStream);
                });


                console.log(filename)*/

                //

/*               file = uploads.length+1;

               uploads.push({
                   file,
                   filename,
                   photoURL
                });
                const name = Date.now()+'_'+filename;
                console.log(uploads)
                console.log(file , "file")*/

       /*         return {
                    filename: storedFileName,
                    photoURL: `${storedFileName}`,

                }

            },*/


        /*        addImage: async (parent, { file } , args) => {
                    const { createReadStream, filename, mimetype, encoding } = await file


                    console.log(file)
                    console.log(args.filename)
                    console.log('File name :'+filename);
                    return {filename,mimetype,encoding}
                },*/

        /*           addImage:  async (parent, { file }) => {
                       const {  filename, mimetype, encoding } = await file;

                       // Invoking the `createReadStream` will return a Readable Stream.
                       // See https://nodejs.org/api/stream.html#stream_readable_streams

                       console.log(filename)


                       return { filename, mimetype, encoding };
                   },
       */



        /*

                imageCreate: (parent, { name ,url }, context) => {


                        const id = api.images.length+1;

                        api.images.push({
                            id,
                            name,
                            url
                        });

                    console.log(context)
                    },

        */

}
    }

}


