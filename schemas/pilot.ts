import { defineField, defineType } from "sanity"

export default defineType({
  name: "pilot",
  title: "Piloten",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naam",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      options: {
        list: [
          { title: "MX1", value: "MX1" },
          { title: "MX2", value: "MX2" },
          { title: "MX3", value: "MX3" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "number",
      title: "Nummer",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biografie",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "achievements",
      title: "Prestaties",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
})

