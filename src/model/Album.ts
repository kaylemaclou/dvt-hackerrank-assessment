export default class Album {
  public uniqueKey? = <string>'';
  public title? = <string>'';
  public artistName? = <string>'';

  constructor(uniqueKey: string, title: string, artistName: string) {
    this.uniqueKey = uniqueKey;
    this.title = title;
    this.artistName = artistName;
  }

  get imageUrl(): string {
    return (
      (process.env.REACT_APP_DEEZER_IMAGE_URL_PREFIX as string) +
      this.uniqueKey +
      process.env.REACT_APP_DEEZER_IMAGE_URL_SUFFIX
    );
  }
}
