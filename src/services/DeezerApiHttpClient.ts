export default class DeezerApiHttpClient {
  static searchForTitles(searchString: string): Promise<Array<any>> {
    return fetch(
      `${process.env.REACT_APP_DEEZER_API_BASE_URL}/search?q=${searchString}`,
      {
        method: 'GET',
        headers: new Headers({})
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(`Unable to call Deezer API. ${error.message}`);
      });
  }
}
