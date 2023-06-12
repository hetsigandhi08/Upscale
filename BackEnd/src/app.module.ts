import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoadmapModule } from './roadmap/roadmap.module';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION_URI), RoadmapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
