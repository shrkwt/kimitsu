export let PopularMoviesQuery = `
query ($perPage: Int, $page: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(sort: POPULARITY_DESC, type: ANIME, format: MOVIE) {
      idMal
      id
      title {
        romaji
        english
        userPreferred
      }
      bannerImage
      coverImage {
        medium
        large
        extraLarge
      }
      description
      episodes
    }
  }
}
`;

export let PopularAnimeQuery = `
query ($perPage: Int, $page: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(sort: POPULARITY_DESC, type: ANIME, format: TV) {
      idMal
      id
      title {
        romaji
        english
        userPreferred
      }
      bannerImage
      coverImage {
        medium
        large
        extraLarge
      }
      description
      episodes
    }
  }
}
`;

export let TrendingAnimeQuery = `
query ($perPage: Int, $page: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(sort: TRENDING_DESC, type: ANIME) {
      idMal
      id
      title {
        romaji
        english
        userPreferred
      }
      bannerImage
      coverImage {
        medium
        large
        extraLarge
      }
      description
      episodes
    }
  }
}
`;

export let top100AnimeQuery = `
query ($perPage: Int, $page: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(sort: SCORE_DESC, type: ANIME) {
      idMal
      id
      title {
        romaji
        english
        userPreferred
      }
      bannerImage
      coverImage {
        medium
        large
        extraLarge
      }
      description
      episodes
    }
  }
}
`;

export let favouritesAnimeQuery = `
query ($perPage: Int, $page: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(sort: FAVOURITES_DESC, type: ANIME) {
      idMal
      id
      title {
        romaji
        english
        userPreferred
      }
      bannerImage
      coverImage {
        medium
        large
        extraLarge
      }
      description
      episodes
    }
  }
}
`;

export let searchAnimeQuery = `
query ($search: String) {
  Page(page: 1, perPage: 100) {
    media(search: $search, type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
      idMal
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      genres
      bannerImage
      coverImage {
        extraLarge
        large
      }
    }
  }
}
`;

export let genreAnimeQuery = `
query ($genre: String) {
  Page(page: 1, perPage: 100) {
    media(genre: $genre, type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
      idMal
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      genres
      bannerImage
      coverImage {
        extraLarge
        large
      }
    }
  }
}
`;

export let searchByIdQuery = `
query ($id: Int) {
  Media(id: $id, type: ANIME) {
    title {
      romaji
      english
      native
      userPreferred
    }
    type
    idMal
    episodes
    status
    genres
    description
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    averageScore
    bannerImage
    trailer {
      id
      site
      thumbnail
    }
    coverImage {
      extraLarge
      large
    }
    relations {
      edges {
        id
        relationType
        node {
          id
          idMal
          coverImage {
            extraLarge
            large
            medium
          }
          title {
            romaji
            english
            native
            userPreferred
          }
          episodes
          meanScore
        }
      }
    }
  }
}
`;

export let searchWatchedId = `
query ($ids: [Int]) {
  Page(page: 1, perPage: 100) {
    media(id_in: $ids, type: ANIME, sort: SEARCH_MATCH) {
      title {
        romaji
        userPreferred
        english
      }
      coverImage {
        large
        extraLarge
      }
      idMal
      id
    }
  }
}
`;

export let searchByAniIdQuery = `
	query ($id: Int) {
  Media(idMal: $id) {
    title {
      romaji
      english
      native
      userPreferred
    }
    type
    status
    genres
    description
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    averageScore
    bannerImage
    coverImage {
      extraLarge
      large
    }
  }
}
`;
