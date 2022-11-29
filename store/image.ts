import { defineStore } from 'pinia'
import { useClient } from '@/utilities/apollo-client'
import { addImage } from '~/apollo/mutations/addImage'



import {
Image,
    Images


} from '@/types/types'


type imageAdd = {
    imageAdd: {
        image: Image
    }
}



interface ImageActions {

    imageCreate(file: Images[]): []


}


export const Uploads = defineStore('image', {
    state: () => ({
        uploads: [],
        filename: '',
        encoding : '',
        mimetype : ''

    }),
    getters: {

        Images: (state) => state.uploads

    },
    actions: {


        async imageCreate() {

            const { data } = await useClient().mutate<imageAdd>({
                mutation: addImage,

            })
            console.log(data)
        },


    }
})
