import "server-only"

interface Dictionary {
  navigation: {
    home: string
    construction: string
    properties: string
    about: string
    contact: string
    getQuote: string
  }
  hero: {
    title: string
    subtitle: string
    services: string
    viewProperties: string
  }
  construction: {
    title: string
    subtitle: string
    description: string
    residential: {
      title: string
      description: string
    }
    commercial: {
      title: string
      description: string
    }
    renovation: {
      title: string
      description: string
    }
    requestConsultation: string
    process: {
      title: string
      description: string
      planning: {
        title: string
        description: string
      }
      construction: {
        title: string
        description: string
      }
      completion: {
        title: string
        description: string
      }
    }
  }
  properties: {
    title: string
    subtitle: string
    description: string
    tabs: {
      all: string
      residential: string
      commercial: string
      land: string
    }
    viewAll: string
    property: {
      forSale: string
      bedrooms: string
      bathrooms: string
      garage: string
      sqft: string
      viewDetails: string
    }
  }
  about: {
    title: string
    subtitle: string
    description1: string
    description2: string
    contactUs: string
    ourProjects: string
    stats: {
      experience: string
      projects: string
      clients: string
      team: string
    }
  }
  testimonials: {
    title: string
    subtitle: string
    description: string
    clients: {
      client1: {
        name: string
        role: string
        testimonial: string
      }
      client2: {
        name: string
        role: string
        testimonial: string
      }
      client3: {
        name: string
        role: string
        testimonial: string
      }
    }
  }
  contact: {
    title: string
    subtitle: string
    description: string
    info: {
      phone: {
        title: string
        value: string
      }
      email: {
        title: string
        value: string
      }
      office: {
        title: string
        value: string
      }
      hours: {
        title: string
        value: string
      }
    }
    form: {
      title: string
      description: string
      firstName: string
      lastName: string
      email: string
      phone: string
      service: {
        title: string
        placeholder: string
        residential: string
        commercial: string
        renovation: string
        realEstate: string
        other: string
      }
      message: {
        title: string
        placeholder: string
      }
      submit: string
    }
  }
  underConstruction: {
    title: string
    message: string
    launch: string
    launchDate: string
    email: string
    phone: string
    notify: string
    contact: string
  }
  footer: {
    rights: string
    terms: string
    privacy: string
    cookies: string
  }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (!Object.keys(dictionaries).includes(locale)) {
    return dictionaries.tr()
  }
  return dictionaries[locale]()
}

