import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role-dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {
    }

    @Post()
    create(@Body() userDto: CreateRoleDto) {
        return this.rolesService.createRole(userDto)
    }

    @Get('/:value')
    getRoleByValue(@Param('value') value:string) {
        return this.rolesService.getRoleByValue(value)
    }
}
