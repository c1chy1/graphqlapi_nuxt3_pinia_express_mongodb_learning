<template>

    <div class="container mx-auto grid grid-cols-5 w-full">

      <div v-for="item in collection"  >

      <h1>{{item.filename}}</h1>
        <img class="w-16" :src="item.url">

      </div>

      <div class="flex flex-col py-8">
      <input v-model="text" placeholder="name">
      <input v-model="url" placeholder="url">
      <button @click="Mut">
        Send message
      </button>

<!--      <form action="/action_page.php">

        <p>{{data}}</p>
        <input type="submit">

      </form>

        <button @click="onSubmit">onSubmit</button>-->

        <div class="uk-margin">
          <input ref="file" type="file"  @change="uploadPhoto">
        </div>
        <div class="uk-margin">
          <button  @click="addGraviola"> test</button>
        </div>

        <h1 class="mt-12">{{Uploads().filename}}</h1>
        <h1 class="mt-12">{{product.name}}</h1>
        <h1>{{file}}</h1>
      </div>




    </div>
</template>



<script lang="ts" setup>
import {useQuery , useMutation} from "@vue/apollo-composable";
import {Uploads} from "~/store/image";
import {ref} from 'vue'
import {images} from "~/apollo/queries/images";
import {uploads} from "~/apollo/queries/upload";
import {imageCreate} from "~/apollo/mutations/imageCreate";
import {addImage} from "~/apollo/mutations/addImage";
import './assets/tailwind.css'
import  gql from 'graphql-tag'
import  {useClient}  from '~/plugins/apollo-client'


console.log(Uploads().filename)



const { result, error } = useQuery(uploads, {

});

const collection = computed(() => result.value?.uploads?? [])

function addGraviola() {


  Uploads().imageCreate()

}

const url = ref([''])

const text = ref([''])

const file = ref()

const files = []

/*withDefaults(defineProps<{
  size?: number
  labels?: string[]
  files? : typeof collection

}>(), {
  size: 3,
  labels: () => ['default label'],

})*/




const product = ref({
  id: "",
  name: "test2",
  price: 0,
  image: "",
});

  const  { mutate : uploadPhoto } = useMutation(addImage, () => ({
    variables: {
      file: {
        filename:  product.value.name,
        encoding: product.value.price,
        mimetype: product.value.image,
      }

    },
    refetchQueries: [

      {query: uploads}

    ]
  }))

console.log(file)
console.log(product.value.name)




const { mutate : Mut } = useMutation(addImage, () => ({
  variables: {
    file: {
      filename: url.value,
      encoding: text.value,
    }

  },

  refetchQueries: [

    {query: uploads}

  ]
}))

console.log(collection)

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
