import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from 'class-validator'

export class CreateUserDto {
    @ApiProperty({example: 'test@mail.com', description: 'email'})
    @IsString({message: 'Must be string'})
    @IsEmail({},{message: 'Wrong email'})
    readonly email: string;

    @ApiProperty({example: '111111', description: 'password'})
    @IsString({message: 'Must be string'})
    @Length(4, 16, {message: 'Not less then 4 and not higher than 16 '})
    readonly password: string;
}
