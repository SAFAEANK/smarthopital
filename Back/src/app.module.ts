import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [  
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    BooksModule,
    UsersModule],
  
})
export class AppModule {}
