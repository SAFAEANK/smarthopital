import { IsEmail, IsNotEmpty } from 'class-validator';

export class BookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  genre: string;
}
