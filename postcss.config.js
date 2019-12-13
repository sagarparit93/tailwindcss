const tailwindcss = require("tailwindcss")
const purgecss  =   require("@fullhuman/postcss-purgecss")
const cssnano =   require("cssnano")
const autoprefixer =    require("autoprefixer")

module.exports = {
  plugins: [
    // ...
    //require("tailwindcss"),
    tailwindcss('./tailwind.js'),
    cssnano({
        preset: 'default',
    }),
    purgecss({
        content:['./src/*.html'],
        extractors:[
            {
                extrastor:class TailwindExtractor{
                    static extractorsract(content){
                        return content.match(/[A-Z0-9-\/]+/g)||[];
                    }
                },
                extensions:['css', 'html']
            }
        ]
    }),
autoprefixer
    // ...
  ]
};


