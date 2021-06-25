export default class DeezerApiHttpClient {
  static searchForTitle(searchString: string): Promise<Array<any>> {
    return fetch(
      `${process.env.DEEZER_API_BASE_URI}/search?q=${searchString}`,
      {
        method: 'GET',
        headers: new Headers({
          //              Authorization: `Bearer ${AadUser.user.accessToken}`
        })
      }
    ).then((response) => response.json());
  }
}
