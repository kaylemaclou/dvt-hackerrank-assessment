import Title from '../model/Title';
import Track from '../model/Track';

export default class DeezerApiHttpClient {
  static searchForTitles(searchString: string): Promise<Array<Title>> {
    return new Promise<Array<Title>>(async (resolve, reject) => {
      try {
        const titles: Array<Title> = await fetch(
          `${process.env.REACT_APP_CORS_PROXY_URL}${process.env.REACT_APP_DEEZER_API_BASE_URL}/search?q=${searchString}`,
          {
            method: 'GET',
            headers: new Headers({})
          }
        ).then((response) =>
          response.json().then((rawTitlesData) => {
            console.log(rawTitlesData.data);
            return rawTitlesData.data.map(
              (rawTitleData: any) =>
                new Title(
                  rawTitleData['md5_image'] as string,
                  rawTitleData['title'] as string,
                  rawTitleData['artist']['name'] as string,
                  parseInt(rawTitleData['duration']) as number
                )
            );
          })
        );
        resolve(titles);
      } catch (error) {
        reject(new Error(`Unable to call Deezer API. ${error.message}`));
      }
    });
  }

  static getTracksForAlbum(tracksUrl: string): Promise<Array<Track>> {
    return new Promise<Array<Track>>(async (resolve, reject) => {
      try {
        const tracks: Array<Track> = await fetch(
          `${process.env.REACT_APP_CORS_PROXY_URL}${tracksUrl}`,
          {
            method: 'GET',
            headers: new Headers({})
          }
        ).then((response) =>
          response.json().then((rawTracksData) => {
            console.log(rawTracksData.data);
            return rawTracksData.data.map(
              (rawTrackData: any) =>
                new Track(
                  rawTrackData['id'] as string,
                  rawTrackData['track_position'] as number,
                  rawTrackData['title'] as string,
                  parseInt(rawTrackData['duration']) as number
                )
            );
          })
        );
        resolve(tracks);
      } catch (error) {
        reject(new Error(`Unable to call Deezer API. ${error.message}`));
      }
    });
  }
}
