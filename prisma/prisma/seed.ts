import { PrismaClient } from '@prisma/client'
import allQuotes from './quotes.js'
const prisma = new PrismaClient()


async function main() {

  for (let [author, aquotes] of Object.entries(allQuotes) as [string, string[]][]) {
    const auth = await prisma.author.upsert({
      where: { name: author },
      update: {},
      create: {
        name: author,
        quotes: {
          create: aquotes.map((quote: string) => {
            return { quote: quote }
          })
        }
      }
    })
    console.log('author', auth)
  }

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
