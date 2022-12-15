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

        allFiles: (parent, args, context) => {
            // if (!context.loggedInUser) throw new ForbiddenError(error.auth.failed);

            console.log(args, context)

            return File.find({});
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


      uploadFile: async (parent, args, context) => {

          const { userId } = context;

          // Check if story title already exists
          if (await File.findOne({ filename: args.filename})) {
              throw Error('Story already exists');
          }

          const file = await File.create({
              ...args,
             filename: userId,
          });
          pubsub.publish("file", file);

          return file;
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


