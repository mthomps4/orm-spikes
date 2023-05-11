import { prisma } from '@/lib/prisma';
import { PrismaClient, Role, User } from '@prisma/client';

export type SignupArgs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: Role[];
};

// This can extend the prisma methods once initialized -- `prisma.user.signup`
export const ExtendedUserClient = (prismaUser: PrismaClient['user']) => {
  return Object.assign(prismaUser, {
    async signup({ email, password, firstName, lastName, roles }: SignupArgs): Promise<User> {
      return prismaUser.create({
        data: {
          email: email,
          password: password,
          roles,
          profile: {
            create: {
              firstName: firstName,
              lastName: lastName,
            },
          },
        },
      });
    },
  });
};

export const Users = ExtendedUserClient(prisma.user);
