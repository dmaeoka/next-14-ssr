const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

    const author = {
        name: "Diego Maeoka",
        username: "dmaeoka",
        avatar: "https://github.com/dmaeoka.png",
    };

    const ana = await prisma.user.upsert({
        where: { username: author.username },
        update: {},
        create: author,
    })

    console.log('Author created', ana)

    const posts = [
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
            title: "Introduction to React",
            slug: "introduction-to-react",
            body: "In this post, we'll explore the basic concepts of React, a JavaScript library for building user interfaces. We'll cover components, JSX, and state.",
            markdown: "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/css-grid-na-pratica.png",
            title: "CSS Grid in Practice",
            slug: "css-grid-in-practice",
            body: "Learn how to create responsive layouts with CSS Grid. This post covers everything from grid definition to building complex layouts in a simple and effective way.",
            markdown: "```css\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/vuejs-para-iniciantes.png",
            title: "Vue.js for Beginners",
            slug: "vuejs-for-beginners",
            body: "Vue.js is a progressive framework for building user interfaces. This beginner's guide covers the essential features of Vue.",
            markdown: "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Hello Vue!'\n  }\n})\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/dicas-de-acessibilidade-web.png",
            title: "Web Accessibility Tips",
            slug: "web-accessibility-tips",
            body: "Exploring the importance of web accessibility, this post offers practical tips to make your websites more accessible to all users.",
            markdown: "```html\n<a href=\"#\" aria-label=\"Learn more about accessibility\">Learn more</a>\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-typescript.png",
            title: "Introduction to TypeScript",
            slug: "introduction-to-typescript",
            body: "This post is an introductory guide to TypeScript, explaining how it boosts productivity and improves JavaScript code maintainability.",
            markdown: "```typescript\nfunction greeter(person: string) {\n  return 'Hello, ' + person;\n}\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/otimizacao-de-performance-no-react.png",
            title: "Performance Optimization in React",
            slug: "performance-optimization-in-react",
            body: "Discussing advanced techniques to optimize React app performance, this post covers concepts like memoization and lazy loading.",
            markdown: "```javascript\nconst MemoizedComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/explorando-flexbox-no-css.png",
            title: "Exploring Flexbox in CSS",
            slug: "exploring-flexbox-in-css",
            body: "This post details how to use Flexbox to create responsive and flexible layouts in CSS, with practical examples for easy understanding.",
            markdown: "```css\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n}\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/angular-primeiros-passos.png",
            title: "Angular: Getting Started",
            slug: "angular-getting-started",
            body: "Ideal for beginners, this post introduces Angular, a powerful framework for developing web applications, with a basic example.",
            markdown: "```typescript\n@Component({\n  selector: 'my-app',\n  template: '<h1>Hello Angular</h1>'\n})\nexport class AppComponent { }\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/gerenciamento-de-estado-com-redux.png",
            title: "State Management with Redux",
            slug: "state-management-with-redux",
            body: "Covering one of the crucial aspects of React app development, this post teaches how to manage state efficiently using Redux.",
            markdown: "```javascript\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'ACTION_TYPE':\n      return { ...state, ...action.payload };\n    default:\n      return state;\n  }\n};\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/sass-simplificando-o-css.png",
            title: "Sass: Simplifying CSS",
            slug: "sass-simplifying-css",
            body: "This post explores how the Sass preprocessor can simplify and improve CSS writing through variables, mixins, and functions.",
            markdown: "```scss\n$primary-color: #333;\nbody {\n  color: $primary-color;\n}\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/webpack-um-guia-para-iniciantes.png",
            title: "Webpack: A Beginner's Guide",
            slug: "webpack-a-beginners-guide",
            body: "Learn how to set up Webpack, a powerful module bundler, in this step-by-step guide for beginners.",
            markdown: "```javascript\nmodule.exports = {\n  entry: './path/to/my/entry/file.js'\n};\n```",
            authorId: ana.id
        },
        {
            cover: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/construindo-spa-com-vuejs.png",
            title: "Building a SPA with Vue.js",
            slug: "building-a-spa-with-vuejs",
            body: "This post offers a detailed tutorial on how to build an efficient and interactive Single Page Application (SPA) using the Vue.js framework.",
            markdown: "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Welcome to your Vue.js SPA!'\n  }\n});\n```",
            authorId: ana.id
        }
    ];

    for (const post of posts) {
        await prisma.post.upsert({
            where: { slug: post.slug },
            update: {},
            create: post,
        });
    }


    console.log('Seed OK')
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })