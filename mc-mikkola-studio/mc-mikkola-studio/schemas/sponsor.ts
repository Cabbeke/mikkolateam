import { defineField, defineType } from "sanity"

export default defineType({
  name: "sponsor",
  title: "Sponsors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naam",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beschrijving",
      type: "string",
      description: "Korte beschrijving van het bedrijf (optioneel)",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "address",
      title: "Adres",
      type: "string",
      description: "Volledig adres of alleen plaats",
    }),
    defineField({
      name: "phone",
      title: "Telefoonnummer",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
      description: "Volledige URL inclusief https://",
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Uitgelicht",
      type: "boolean",
      description: "Toon deze sponsor op de homepage",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      description: "Bepaalt de volgorde waarin sponsors worden getoond (lagere nummers komen eerst)",
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "logo",
    },
  },
})

