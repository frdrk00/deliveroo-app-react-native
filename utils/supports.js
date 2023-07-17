export const fetchQuery = `
*[_type == 'featured'] {
    ...,
    restaurants[] -> {
      ...,
      dishes[] ->,
    }
  }
`