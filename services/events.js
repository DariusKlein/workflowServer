const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient()


async function events(name, type) {
    if (!name || !type) return "test"
        return await prisma.Event.create({
            data: {
                name: name,
                type: type,
            },
        })
}


module.exports = {events}