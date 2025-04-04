import { defineField, defineType } from "sanity"

export default defineType({
  name: "nieuws",
  title: "Nieuws",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicatiedatum",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Hoofdafbeelding",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Samenvatting",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Inhoud",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
})

