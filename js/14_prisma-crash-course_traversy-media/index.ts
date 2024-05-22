import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // Create user
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Shihab Mahamud",
    //         email: "shihab4t@gmail.com"
    //     }
    // })
    // console.log(user);

    // // Get all users
    // const users = await prisma.user.findMany();
    // console.log(users);


    // Create article and associte it with user
    // const article = prisma.article.create({
    //     data: {
    //         title: "First",
    //         body: "something",
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    // console.log(article)


};

try {
    await main();
    prisma.$disconnect();
} catch (error) {
    console.log(error);
    process.exit(1);
}
