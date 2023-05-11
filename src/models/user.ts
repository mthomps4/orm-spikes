import { Prisma, PrismaClient, Role, User } from '@prisma/client';

import { prisma } from '@/lib/prisma';

export type SignupArgs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: Role[];
};

// OPTION 1: define extensions and import into lib/prisma
// TODO: lib/prisma
// import { UserExtensions } from '...';
// const prisma = prisma.$extends(UserExtensions);

// Make sure to install latest @prisma/client@latest for preview types
// type a = PrismaClient['$extends'];

export const UserExtensions = Prisma.defineExtension((client: PrismaClient) =>
  client.$extends({
    name: 'UserExtensions',
    model: {
      /* ... */
    },
    client: {
      /* ... */
    },
    query: {
      /* ... */
    },
    result: {
      /* ... */
    },
  })
);

// OPTIONAL TAKE FOR MODEL SPECIFIC EXTENSIONS
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
