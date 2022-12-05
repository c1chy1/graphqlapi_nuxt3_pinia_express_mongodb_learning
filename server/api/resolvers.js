
const path = require('path')
const api = require('./api');
const  { GraphQLUpload }  = require("apollo-upload-server");
const { shortid } = require("shortid");
/*var fs = require('fs');*/
const __dirname = path.resolve();

const { mkdirp } = require("mkdirp");
const stream = require('stream');
const { ApolloError } = require('apollo-server-express');



/*const { createWriteStream, unlinkSync , createReadStream } = require('fs')*/

const UPLOAD_DIR = './uploads'
const uploads = []

const resolvers = {

    Upload:  GraphQLUpload,


    Query: {
        /*  images: () => api.images,*/

        uploads: () => uploads


    },
        Mutation: {

            singleUpload: async (parent, { file }, context ,args) => {


                console.log(file , "file")
                console.log(file.filename , "filename" )
                //

                await file

               uploads.push({
                   file
                });

                console.log(uploads)

                return {
                    file
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
module.exports = resolvers
