export default class Title {
  public uniqueKey? = <string>'';
  public description? = <string>'';
  public artistName? = <string>'';
  public duration? = <number>0;

  constructor(
    uniqueKey: string,
    description: string,
    artistName: string,
    duration: number
  ) {
    this.uniqueKey = uniqueKey;
    this.description = description;
    this.artistName = artistName;
    this.duration = duration;
  }

  get imageUrl(): string {
    return (
      (process.env.REACT_APP_DEEZER_IMAGE_URL_PREFIX as string) +
      this.uniqueKey +
      process.env.REACT_APP_DEEZER_IMAGE_URL_SUFFIX
    );
  }

  get formatedDuration(): string {
    return `${Math.round((this.duration as number) / 60)}:${
      ((this.duration as number) % 60).toString().length === 1
        ? '0' + ((this.duration as number) % 60)
        : (this.duration as number) % 60
    } mins`;
  }
}
