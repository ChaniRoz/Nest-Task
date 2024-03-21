import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './data-base/database.module';
import { User, UserSchema } from './data-base/user.schema'

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
