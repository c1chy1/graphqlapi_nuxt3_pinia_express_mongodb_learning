<template>

    <div class="container mx-auto grid grid-cols-1 grid-rows-1 w-full">

      <div v-for="item in collection"   >

        <img class="w-16" :src="`_nuxt/assets/${item.filename}`">

        <h1>{{item.filename}}</h1>

      </div>
      <button @click="createCharacter" ref="button">
        Send message
      </button>

<!--      <div class="flex flex-col py-8">
        <div>
      <input v-model="text" placeholder="name">
      <input v-model="url" placeholder="url">


&lt;!&ndash;      <form action="/action_page.php">

        <p>{{data}}</p>
        <input type="submit">

      </form>

        <button @click="onSubmit">onSubmit</button>&ndash;&gt;

        <div class="uk-margin">
          <input ref="file" type="file"  @change="uploadPhoto" multiple>
        </div>
        <div class="uk-margin">
          <button  @click="addGraviola"> test</button>
        </div>

        <h1 class="mt-12">{{Uploads().filename}}</h1>
        <h1 class="mt-12">{{product.name}}</h1>
        <h1>{{file}}</h1>
      </div>




      </div>-->
      <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="Title"
          type="text"
          ref="title"
          v-model="product.name"
      />

      <div class="form--container ">
        <div class="form--item flex flex-col">
          <label class="form--label" for="file">Select File: </label>
          <input class="form--input" type="file"  name="file" id="file" @change="handleImage"  required />
        </div>
        <div v-if="file_name" class="form--item">
          <img :alt="file_name" :src="photo_url" class="w-16">
        </div>
      </div>
      <input v-model="file_name" placeholder="name">
    </div>


  <div>
    <h2 class="mb-4">Create Character</h2>
    <form action="" @submit.prevent="createCharacter">
      <div class="mb-4">
        <input
            v-model="name"
            type="text"
            class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
            placeholder="name"
        >
      </div>
      <div class="mb-4">
        <input
            v-model="status"
            type="text"
            class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
            placeholder="status"
        >
      </div>
      <div class="mb-4">
        <input
            v-model="gender"
            type="text"
            class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
            placeholder="gender"
        >
      </div>
      <div class="mb-4">
        <input
            v-model="image"
            type="text"
            class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
            placeholder="image"
        >
      </div>
      <button type="submit" class="bg-green-600 py-2 px-3 font-semibold text-white">Create Character</button>
    </form>
  </div>

  <input
      type="file"
      ref="banner"
      accept="image/*"
      @change="previewBanner"
  />

<!--  <img :alt="file_name" src="./assets/Flag_of_Germany.svg">-->
</template>



<script lang="ts" setup>

import {useQuery , useMutation , useResult} from "@vue/apollo-composable";
import {Uploads} from "~/store/image";
import {ref,Events} from 'vue'
import {images} from "~/apollo/queries/images";
import {uploads} from "~/apollo/queries/upload";
import {imageCreate} from "~/apollo/mutations/imageCreate";
import {addImage} from "~/apollo/mutations/addImage";
import './assets/tailwind.css'
import  gql from 'graphql-tag'
import  {useClient}  from '~/plugins/apollo-client'


import mongoose from "mongoose"
import {addCharacter} from "~/apollo/mutations/addCharacter";
import {uploadPhoto} from "~/apollo/mutations/uploadPhoto";
import {allPhotos} from "~/apollo/queries/allPhotos";
import {Photo} from "~/server/api/models/Photo.model";
import {uploadFile} from "~/apollo/mutations/uploadFile";
import {allFiles} from "~/apollo/queries/allFiles";




/*import {MongoClient} from "mongodb";
const title = ref()

const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost" )*/

const formData = {

  title: ""

}

let file_name = ref<string>('');



const { result, error } = useQuery(allFiles, {
  filename : String

})


const collection = computed(() => result.value?.allFiles?? [])

/*const collection = computed(() => result.value?.allPhotos?? [])*/


console.log(result)
function addGraviola() {


  Uploads().imageCreate()

}

const name = ref<string>('');
const image = ref<string>('');
const status = ref<string>('');
const gender = ref('');





const url = ref()

const files = ref([])
let photo_url = ref('');
let file_path = ref('');
let file_id = ref('');





const { mutate: handleAvatar, onDone } = useMutation(uploadFile, () => ({

  refetchQueries: [

    {query: allFiles}

  ]
}))


onDone(result => {

  console.log(result.data.uploadFile)
  let {  filename ,   encoding , mimetype  } = result.data.uploadFile;
  file_name.value = filename;
  photo_url.value = encoding;
  photo_url.value =  mimetype;
  console.log(filename)
})

const product = ref({
  id: "",
  name: "",
  price: 0,
  image: "",
  files: []
});



const handleImage = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = (target.files as FileList)[0];


  try {
    console.log(file);
    console.log(files);
    handleAvatar({
file : {

  filename: file.name,
  encoding: file.size,
  mimetype: file.type

}
    },
    );
  } catch (error) {
    console.log(error);
  }
  return {  handleImage };

}

/*withDefaults(defineProps<{
  size?: number
  labels?: string[]
  allFiles? : typeof collection

}>(), {
  size: 3,
  labels: () => ['default label'],

})*/


/*function previewBanner(event: { target: { allFiles: any[]; }; }) {
file = event.target.allFiles[0];

  console.log(file)
}*/



  const  { mutate : createCharacter } = useMutation(addCharacter, () => ({


    variables: {
      name : name.value,
      status : status.value,
      gender :gender.value,
      image : image.value

    },
    refetchQueries: [

      {query: uploads}

    ]
  }))

let banner = ref()

/*  const  { mutate : Mut } = useMutation(addImage, () => ({


    variables: {
      file

    },
    refetchQueries: [

      {query: uploads}

    ]
  }))*/

console.log(product.value.name)

let file = null
const previewBanner = (event: any) => {


 file = event.target.files[0]


  console.log(file)

}


async function f() {



}


/*const { data } = await useClient().mutate({
  mutation: imageCreate,
  variables: {
    name
  },
})

console.log(data)*/



/*  const { mutate } = useMutation(gql`
  mutation ImageCreate($name: String!) {

   imageCreate(name: $name) {
   name

   }
}
`)*/

/*


const { mutate: newImage, onDone} = useMutation(gql`
  mutation ImageCreate($name: String!) {

      imageCreate(name: $name) {

            name
            id
        }
}
`);

onDone((res) => {
  console.log(res);
});
*/

/*console.log(createImage)*/


</script>
