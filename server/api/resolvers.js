


/*const { createWriteStream, unlinkSync , createReadStream } = require('fs')*/

const UPLOAD_DIR = './uploads'
const uploads = []

export const resolvers = {




    Query: {
        /*  images: () => api.images,*/

        uploads: () => uploads},
        Mutation: {

            singleUpload: async (parent, { file }, context) => {

                const { filename , photoURL } = await file;



                //

               file = uploads.length+1;

               uploads.push({
                   file,
                   filename,
                   photoURL
                });
                const name = Date.now()+'_'+filename;
                console.log(uploads)
                console.log(file , "file")

                return {
                    filename,
                    photoURL: `_nuxt/assets/${filename}`,

                }

            },


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

}}
