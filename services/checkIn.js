const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient()


async function createCheckIn(checkIn) {
    return prisma.checkIn.create({
        data: {
            gevoel: checkIn.gevoel,
            planned: checkIn.planned,
            completed: "",
            learned: "",
        },
    })
}

async function updateCheckIn(checkIn) {
    console.log(checkIn)
    return prisma.checkIn.update({
        where: {
            id: checkIn.id
        },
        data: {
            gevoel: checkIn.gevoel,
            planned: checkIn.planned,
            completed: checkIn.completed,
            learned: checkIn.learned,
            inScorion: checkIn.inSciron
        },
    })
}

async function getCheckIn( id) {
    return prisma.checkIn.findFirst({
        where: {id}
    })

}

async function getCheckInNonScorion() {
    return prisma.checkIn.findFirst({
        where: {inScorion: false}
    })

}

module.exports = {createCheckIn, updateCheckIn, getCheckIn, getCheckInNonScorion}