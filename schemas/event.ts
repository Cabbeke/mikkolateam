import { defineField, defineType } from "sanity"

export default defineType({
  name: "event",
  title: "Evenementen",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      description: 'Naam van de locatie, bijv. "Lommel"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Datum",
      type: "date",
      options: {
        dateFormat: "DD MMMM YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Locatie",
      type: "string",
      description: 'Volledige locatie, bijv. "Lommel, België"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "federation",
      title: "Federatie",
      type: "string",
      options: {
        list: [
          { title: "VMCF", value: "VMCF" },
          { title: "FFM", value: "FFM" },
          { title: "BMB", value: "BMB" },
          { title: "Andere", value: "OTHER" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "special",
      title: "Speciale info",
      type: "string",
      description: "Bijzonderheden over het evenement (optioneel)",
    }),
    defineField({
      name: "description",
      title: "Beschrijving",
      type: "text",
      rows: 3,
      description: "Uitgebreide beschrijving van het evenement (optioneel)",
    }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Afbeelding van het circuit of evenement (optioneel)",
    }),
    defineField({
      name: "registrationUrl",
      title: "Registratie URL",
      type: "url",
      description: "Link naar registratiepagina (optioneel)",
    }),
    defineField({
      name: "results",
      title: "Resultaten",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "pilotName",
              title: "Piloot",
              type: "string",
            }),
            defineField({
              name: "position",
              title: "Positie",
              type: "number",
            }),
            defineField({
              name: "category",
              title: "Categorie",
              type: "string",
            }),
          ],
        },
      ],
      description: "Resultaten van MC MIKKOLA piloten (optioneel, toe te voegen na het evenement)",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      // Formateer de datum als die bestaat
      const formattedDate = subtitle
        ? new Date(subtitle).toLocaleDateString("nl-BE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : ""

      return {
        title: title || "Geen titel",
        subtitle: formattedDate,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: "Datum, Nieuw → Oud",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Datum, Oud → Nieuw",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
})

