const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient()


async function events(event) {
    if (!event.name || !event.type) throw new Error("value missing")
        return await prisma.Event.create({
            data: {
                name: event.name,
                type: event.type,
            },
        })
}


module.exports = {events}