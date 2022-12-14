

import {Character} from "~/server/api/models/Character.model";



export const resolvers = {
    Query: {
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
        addCharacter(_, payload) {

            const {value} = payload

            console.log(value)

            return Character.create(value)
        },
    }
}


