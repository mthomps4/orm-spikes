import { Prisma, PrismaClient, Role } from '@prisma/client';

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

// Example of Scopes...
// const PostExtensions = Prisma.defineExtension((client: PrismaClient) => {
//   client.$extends({
//     model: {
//       post: {
//         unpublished: () => ({ published: false }),
//         published: () => ({ published: true }),
//         byAuthor: (authorId: string) => ({ authorId }),
//         byAuthorDomain: (domain: string) => ({ author: { email: { endsWith: `@${domain}` } } }),
//         hasComments: () => ({ comments: { some: {} } }),
//         hasRecentComments: (date: Date) => ({ comments: { some: { createdAt: { gte: date } } } }),
//         titleContains: (search: string) => ({ title: { contains: search } }),
//       } satisfies Record<string, (...args: any) => Prisma.PostWhereInput>,
//     },
//   });
// });

// MODELS
// Company with Users
// Company has one PRIMARY User for partial Index (maybe two branches - one raw SQL - one for Join Models)

// https://www.prisma.io/blog/client-extensions-preview-8t3w27xkrxxn#example-computed-fields
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
      // pull name fields forward from Profile
    },
  })
);

// // OPTIONAL TAKE FOR MODEL SPECIFIC EXTENSIONS
// // This can extend the prisma methods once initialized -- `prisma.user.signup`
// export const ExtendedUserClient = (prismaUser: PrismaClient['user']) => {
//   return Object.assign(prismaUser, {
//     async signup({ email, password, firstName, lastName, roles }: SignupArgs): Promise<User> {
//       return prismaUser.create({
//         data: {
//           email: email,
//           password: password,
//           roles,
//           profile: {
//             create: {
//               firstName: firstName,
//               lastName: lastName,
//             },
//           },
//         },
//       });
//     },
//   });
// };

// export const Users = ExtendedUserClient(prisma.user);
