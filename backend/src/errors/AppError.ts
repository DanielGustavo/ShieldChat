export default class AppError {
  public statusCode: number;

  public message: string;

  public constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
