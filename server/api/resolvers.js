import { GraphQLUpload  } from 'apollo-upload-server';

import shortid from "shortid"
import {FileUpload} from "graphql-upload"
import { PubSub } from 'graphql-subscriptions';
import {createWriteStream, mkdir } from "fs"
import mongoose from "mongoose";
import {Character} from "~/server/api/models/Character.model";
import {Photo} from "~/server/api/models/Photo.model";
import File from "~/server/api/models/File.model";
import {startConnection} from './database';
const pubsub = new PubSub();

import fs from "fs"
import path from "path"
const photos = []
const files = []


const storeUpload = async ({ stream, filename, mimetype }) => {
    const id = shortid.generate();

    //location where image is sored
    const path = `images/${id}-${filename}`;

    // (createWriteStream) writes our file to the images directory
    return new Promise((resolve, reject) =>
        stream
            .pipe(createWriteStream(path))
            .on("finish", () => resolve({ id, path, filename, mimetype }))
            .on("error", reject)
    );
};

const processUpload = async (upload) => {
    const { createReadStream, filename, mimetype } = await upload;
    const stream = createReadStream();
    const file = await storeUpload({ stream, filename, mimetype });
    return file;
};


export const resolvers = {

    Upload: GraphQLUpload,
    Query: {

        allPhotos: () => Photo.find({}, (error, photos) => {
            if (error) console.log('error', error)

            console.log(photos)
            return photos
        }),

    /*    allFiles: async (res) => await File.find({_id: res[0]._id.toHexString()}, (error, files) => {

            console.log(files)
            return files
        }),
*/
        allFiles: async () => {
            return await File.find()
        },
        characters: () => Character.find({}, (error, characters) => {
            if (error) console.log('error', error)
            return characters
        }),
        character: (_, { id }) => Character.findById(id, (error, character) => {
            if (error) console.log('error', error)
            return character
        })
    },
    Mutation: {




        uploadFile: async (_, { file }) => {
            //GRIDFS
            const data = await startConnection()
            const { stream, filename, mimetype, encoding } = await file;
            const gridFsBucket = new mongoose.mongo.GridFSBucket(data);
            const uploadStream = gridFsBucket.openUploadStream(filename);
            await new Promise((resolve, reject) => {
                stream
                    .pipe(uploadStream)
                    .on("error", reject)
                    .on("finish", resolve);
            });
            return { id: uploadStream.id, filename, mimetype, encoding } },

/*        uploadFile: async(parent, args, context, info) => {
            const file = new File(args.file)


            console.log(file)

            await file.save()
            return file
        },*/

/*      uploadFile: async (parent, {file}, context) => {



          const { stream, filename ,   encoding , mimetype , photoURL} = await file

          const newFile = {
              stream,
              filename,
              encoding,
              mimetype,
              photoURL : Buffer.from(photoURL).toString('base64') }


          console.log(newFile.photoURL)

/!*          const data = fs.createReadStream(path.join("../uploads", filename));


          const storedFileUrl = path.join("uploads", filename)


          fs.createWriteStream(storedFileUrl)*!/



 files.push(file)



          return  File.create(newFile)
      },*/




        async uploadPhoto (parent, { photo }) {
            const { filename, createReadStream } = await photo


                const newPhoto = { filename }

                photos.push(newPhoto)


                console.log(photos)

                return Photo.create(newPhoto)

        },



        addCharacter(_, payload) {



            return Character.create(payload)
        },





}




}


