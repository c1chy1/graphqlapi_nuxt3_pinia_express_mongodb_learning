import { GraphQLUpload } from 'apollo-upload-server';
import { PubSub } from 'graphql-subscriptions';

import {Character} from "~/server/api/models/Character.model";
import {Photo} from "~/server/api/models/Photo.model";
import {File} from "~/server/api/models/File.model";

const pubsub = new PubSub();

import fs from "fs"
import path from "path"
const photos = []
const files = []

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


      uploadFile: async (parent, {file}, context) => {



          const { filename ,   encoding , mimetype   } = await file

          const newFile = { filename ,encoding , mimetype  }


          // Check if story title already exists
   const test = File.findOne({
       filename: file.name
   })


          console.log(test)

     /*      file = await File.create({

             filename: file.name,
             encoding : file.encoding,
               mimetype : file.mimetype
          });*/

          console.log(file)

 files.push(file)

          console.log(files)

          return File.create(newFile)
      },




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


