import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  //Standard
  //When a request handler returns a JavaScript object or array, it will automatically be serialized to JSON
  //status code is always 200 by default, except for POST requests which use 201. We can easily change this behavior by adding the @HttpCode(...)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}

//Route wildcards#
//The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on. The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts. The hyphen ( -) and the dot (.) are interpreted literally by string-based paths.
