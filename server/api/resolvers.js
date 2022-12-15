import { GraphQLUpload } from 'apollo-upload-server';

import {Character} from "~/server/api/models/Character.model";
import {Photo} from "~/server/api/models/Photo.model";
import {File} from "~/server/api/models/File.model";
import fs from "fs"
import path from "path"
const photos = []

export const resolvers = {

    Upload: GraphQLUpload,
    Query: {

        allPhotos: () => Photo.find({}, (error, photos) => {
            if (error) console.log('error', error)

            console.log(photos)
            return photos
        }),

        allFiles: () => File.find({}, (error, files) => {
            if (error) console.log('error', error)

            console.log(files)
            return files
        }),
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



        async uploadFile (_, { file }) {
            const { filename, mimetype, encoding } = await file


            console.log(filename,mimetype,encoding)


            return { filename, mimetype, encoding }
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


 /*       addFile: async (parent, { data, file }, ctx) => {


                const {createReadStream, filename, mimetype} = await file;




        }*/}}


