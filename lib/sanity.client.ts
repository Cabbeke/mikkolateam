import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

// Teamleden queries
export async function getAllTeamMembers() {
  return client.fetch(`*[_type == "teamMember" && isActive == true] | order(order asc){
    _id,
    name,
    slug,
    position,
    image,
    bio,
    email,
    phone,
    socialMedia
  }`)
}

export async function getTeamMemberBySlug(slug: string) {
  return client.fetch(
    `*[_type == "teamMember" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      position,
      image,
      bio,
      email,
      phone,
      socialMedia
    }`,
    { slug },
  )
}

// Artikel queries
export async function getAllArticles() {
  return client.fetch(`*[_type == "article"] | order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug
    }
  }`)
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      body,
      author->{
        name,
        slug,
        image
      },
      categories[]->{
        title,
        slug
      },
      relatedArticles[]->{
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt
      }
    }`,
    { slug },
  )
}

// Pijler queries
export async function getAllPillars() {
  return client.fetch(`*[_type == "pillar"] | order(order asc){
    _id,
    title,
    slug,
    icon,
    shortDescription
  }`)
}

export async function getPillarBySlug(slug: string) {
  return client.fetch(
    `*[_type == "pillar" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      icon,
      shortDescription,
      description
    }`,
    { slug },
  )
}

// Project queries
export async function getAllProjects() {
  return client.fetch(`*[_type == "project"] | order(date desc){
    _id,
    title,
    slug,
    mainImage,
    date,
    client,
    categories[]->{
      title,
      slug
    }
  }`)
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      images,
      date,
      client,
      description,
      categories[]->{
        title,
        slug
      },
      teamMembers[]->{
        _id,
        name,
        slug,
        position,
        image
      }
    }`,
    { slug },
  )
}

// Homepage query (nu mainPage)
export async function getHomepage() {
  return client.fetch(`*[_type == "mainPage"][0]{
    title,
    heroSection,
    aboutSection,
    featuredPillars[]->{
      _id,
      title,
      slug,
      icon,
      shortDescription
    },
    featuredProjects[]->{
      _id,
      title,
      slug,
      mainImage,
      client
    },
    featuredArticles[]->{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      author->{
        name,
        slug,
        image
      }
    },
    testimonials,
    seo
  }`)
}

// Sponsor queries
export async function getAllSponsors() {
  return client.fetch(`*[_type == "sponsor" && isActive == true] | order(order asc){
    _id,
    name,
    logo,
    website,
    description
  }`)
}

// Event queries
export async function getUpcomingEvents() {
  const now = new Date().toISOString()
  return client.fetch(
    `*[_type == "event" && startDate > $now] | order(startDate asc){
      _id,
      title,
      slug,
      mainImage,
      startDate,
      endDate,
      location,
      description,
      registrationUrl
    }`,
    { now },
  )
}

export async function getFeaturedEvents() {
  const now = new Date().toISOString()
  return client.fetch(
    `*[_type == "event" && startDate > $now && featured == true] | order(startDate asc)[0...3]{
      _id,
      title,
      slug,
      mainImage,
      startDate,
      endDate,
      location,
      description,
      registrationUrl
    }`,
    { now },
  )
}

// Contact info query
export async function getContactInfo() {
  return client.fetch(`*[_type == "contactInfo"][0]{
    title,
    email,
    phone,
    address,
    googleMapsUrl,
    socialMedia,
    openingHours
  }`)
}
