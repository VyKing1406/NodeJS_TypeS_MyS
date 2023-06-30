"use strict";
// import { PrismaClient,Prisma } from "@prisma/client";
// const prisma = new PrismaClient();
// export async function main(id: number, name: string) {
//     try {
//         const data:Array<Prisma.UserCreateManyInput> = [
//             {id: id, name: `${name}`},
//         ]
//         const res = await prisma.user.createMany(
//             {
//                 data: data,
//                 skipDuplicates: true,
//             }
//         );
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         async () => {
//             await prisma.$disconnect();
//         }
//     }
// }
