import { defineField, defineType } from "sanity"

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naam",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Functie",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Biografie",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      description: "Bepaalt de volgorde waarin teamleden worden weergegeven",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
})

