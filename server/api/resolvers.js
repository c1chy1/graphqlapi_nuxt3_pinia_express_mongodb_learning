
const path = require('path')
const api = require('./api');
const  { GraphQLUpload }  = require("apollo-upload-server");
const { shortid } = require("shortid");
const { fs } = require("fs");
const { mkdirp } = require("mkdirp");
const stream = require('stream');

const { createWriteStream, unlinkSync } = require('fs')

const UPLOAD_DIR = './uploads'
const uploads = []

const resolvers = {

    Upload:  GraphQLUpload,


    Query: {
        /*  images: () => api.images,*/

        uploads: (parent, args) => {
            console.log("flag");
            return [{
                filename: "myfile.jpg",
                mimetype: "image/jpge",
                encoding: "."
            }];
        }},
        Mutation: {


            singleUpload: async (parent, {file}) => {

                try {
                    const {filename, encoding, mimetype} = await file;

                    // const { ext } = path.parse(filename)
                    // const randomName = generateRandomString(12) + ext


                    console.log(filename, encoding, mimetype)

                    console.log(file)
                    return {filename, encoding, mimetype}


                    //   const { createReadStream, filename, mimetype, encoding } = await file;

                    //   // Invoking the `createReadStream` will return a Readable Stream.
                    //   // See https://nodejs.org/api/stream.html#stream_readable_streams
                    //   const stream = createReadStream();
                    //   const pathName = path.join(__dirname, `public/images/${randomName}`)


                    //   const out = fs.createWriteStream(pathName)
                    //   stream.pipe(out)
                    //   await finished(out)

                    //   return { filename, mimetype, encoding }

                } catch (err) {
                    throw Error(err)
                }
            }
        },   }

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


module.exports = resolvers
