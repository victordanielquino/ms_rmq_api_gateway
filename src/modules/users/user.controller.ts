import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Observable<any> {
    return this.usersService.findOne(id);
  }
}
