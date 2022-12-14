

import {Character} from "~/server/api/models/Character.model";
import {Photo} from "~/server/api/models/Photo.model";

const photos = []

export const resolvers = {
    Query: {

        allPhotos: () => Photo.find({}, (error, photos) => {
            if (error) console.log('error', error)
            return photos
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


