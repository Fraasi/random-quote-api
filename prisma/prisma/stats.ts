import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {

  const quotesPerAuthor = await prisma.author.findMany({
    include: {
      _count: {
        select: { quotes: true },
      },
    },
    orderBy: {
      quotes: {
        _count: 'desc',
      }
    },
    take: 10
  })
  console.log('quotesPerAuthor:', quotesPerAuthor)


  const authorCount = await prisma.author.count({
    select: {
      _all: true, // Count all records
      name: true, // Count all non-null field values
    },
  })
  console.log('authorCount:', authorCount)


  const quotesCount = await prisma.quote.count({
    select: {
      _all: true,
      quote: true
    },
  })
  console.log('quotesCount:', quotesCount)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
