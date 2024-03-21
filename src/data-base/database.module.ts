import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/user_DB'),
    MongooseModule.forRoot('mongodb://localhost:27017/user_DB'),
    //mongodb+srv://ch0583273923:MR0403923@cluster0.jxnwjtb.mongodb.net/
  ],
})
export class DatabaseModule {}