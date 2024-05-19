import { Injectable, Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDto } from 'src/dto/books.dto';
import { Book, BookDocument } from 'src/models/books.models';



@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private BookModel: Model<BookDocument>) {}
  Add(body: BookDto) {
    return this.BookModel.create(body);
  }

  FindAll() {
    return this.BookModel.find();
  }

  FindOne(id: string) {
    return this.BookModel.findOne({ _id: id });
  }

  Update(id: string, body: BookDto) {
    return this.BookModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.BookModel.findByIdAndDelete({ _id: id });
  }

  Search(key: string) {
    const keyword = key
      ? {
          $or: [
            { title: { $regex: key, $options: 'i' } },
           
          ],
        }
      : {};
    return this.BookModel.find(keyword);
  }

  
}
