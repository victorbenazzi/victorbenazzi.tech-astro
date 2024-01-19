
import {z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        layout: z.string(),
        description: z.string(),
        pubDate: z.string(),
        category: z.string(),
        cover: image().refine((img) => img.width >= 1024, {
            message: "A imagem de capa deve ter pelo menos 1024 pixels de largura!",
        }),
        coverAlt: z.string(),
    })
})

export const collections = {
    'blog': blogCollection,
};


















// import {z, defineCollection} from 'astro:content';

// const blogCollecttion = defineCollection({
//     schema: z.object({
//         title: z.string(),
//         layout: z.string(),
//         description: z.string(),
//         pubDate: z.string(),
//         category: z.string(),
        
//     })
// })

// export const collections = {
//     'blog': blogCollecttion,
// };

