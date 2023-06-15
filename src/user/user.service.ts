import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './entities/user.entity';

export type User = any;

@Injectable()
export class UserService {
  constructor(private readonly userRepository : UserRepository){}

    

  async findOne(username: string): Promise<UserEntity> {
    return this.userRepository.findUserDetailsByUsername( username );
  }


}
