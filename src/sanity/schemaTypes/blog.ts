import { defineField, defineType, defineArrayMember } from "sanity"

export const blog = defineType ({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    
    fields: [
        defineField (
    {
        name: 'Title',
        type: 'string',
        title: 'Title',
        

    }),
    {
        name: 'Paragraph',
        type: 'text',
        title: 'Paragraph',
    },
]

})