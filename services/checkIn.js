const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient()


async function checkIn(event) {
    if (!event.name || !event.type) return "test"
    return await prisma.Event.create({
        data: {
            name: event.name,
            type: event.type,
        },
    })
}


module.exports = {checkIn}