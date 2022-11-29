import {defineNuxtConfig} from 'nuxt'


export default defineNuxtConfig({

    buildModules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
    modules: ['cors'],



        css: ["~/assets/tailwind.css"],

        build: {

            transpile: [
                "@apollo/client",
                "@vue/apollo-composable",
                "ts-invariant/process",
            ],
        }
}
)
