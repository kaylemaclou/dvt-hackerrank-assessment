export default class Track {
  public uniqueKey? = <string>'';
  public position? = <number>0;
  public title? = <string>'';
  public duration? = <number>0;

  constructor(
    uniqueKey: string,
    position: number,
    title: string,
    duration: number
  ) {
    this.uniqueKey = uniqueKey;
    this.position = position;
    this.title = title;
    this.duration = duration;
  }

  get formatedDuration(): string {
    return `${Math.round((this.duration as number) / 60)}:${
      ((this.duration as number) % 60).toString().length === 1
        ? '0' + ((this.duration as number) % 60)
        : (this.duration as number) % 60
    } mins`;
  }
}
