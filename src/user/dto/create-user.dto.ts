import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { MatchConstraint } from 'src/common/decorators/match-properties.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,15}$/, {
    message: "password expectation doesn't meet",
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @Validate(MatchConstraint, ['password'])
  confirmPassword: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

//   public isPasswordMatch(): void {
//     if (this.password !== this.confirmPassword) {
//       throw new BadRequestException("password doesn't match confirm password");
//     }
//   }
}
