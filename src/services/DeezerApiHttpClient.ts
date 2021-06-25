export default class DeezerApiHttpClient {
  static searchForTitle(searchString: string): Promise<Array<any>> {
    return fetch(
      `${process.env.REACT_APP_DEEZER_API_BASE_URL}/search?q=${searchString}`,
      {
        method: 'GET',
        headers: new Headers({
          //              Authorization: `Bearer ${AadUser.user.accessToken}`
        })
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(`Unable to Deezer API. ${error.message}`);
      });
  }
}
