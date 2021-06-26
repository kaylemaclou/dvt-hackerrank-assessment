import Title from '../model/Title';

export default class DeezerApiHttpClient {
  static searchForTitles(searchString: string): Promise<Array<Title>> {
    return new Promise<Array<Title>>(async (resolve, reject) => {
      try {
        const titles: Array<Title> = await fetch(
          `${process.env.REACT_APP_DEEZER_API_BASE_URL}/search?q=${searchString}`,
          {
            method: 'GET',
            headers: new Headers({})
          }
        ).then((response) =>
          response
            .json()
            .then((rawTitlesData) =>
              rawTitlesData.data.map(
                (rawTitleData: any) =>
                  new Title(
                    rawTitleData['md5_image'] as string,
                    rawTitleData['title'] as string,
                    rawTitleData['artist']['name'] as string,
                    parseInt(rawTitleData['duration']) as number
                  )
              )
            )
            .catch((error) => {
              throw new Error(
                `Unable to call the Deezer API. ${error.message}`
              );
            })
        );
        resolve(titles);
      } catch (error) {
        throw new Error(`Unable to call Deezer API. ${error.message}`);
      }
    });
  }
}
