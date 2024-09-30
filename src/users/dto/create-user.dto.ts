import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ default: 'username', required: true })
  username: string;

  @ApiProperty({ default: 'password', required: true })
  password: string;
}
