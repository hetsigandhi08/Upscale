import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { Template, TemplateSchema } from './schema/template.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Template.name, schema: TemplateSchema }])],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
