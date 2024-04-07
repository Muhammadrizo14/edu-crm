import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CoursesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return this.prismaService.courses.create({data: createCourseDto});
  }

  findAll() {
    return this.prismaService.courses.findMany()
  }

  findOne(id: number) {
    return this.prismaService.courses.findUnique({where: {id}});
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prismaService.courses.update({where: {id}, data: updateCourseDto});
  }

  remove(id: number) {
    return this.prismaService.courses.delete({where: {id}});
  }
}
