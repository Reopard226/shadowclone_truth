import { stringArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['user'])
    t.list.field('userByEmail', {
      type: 'User',
      args: { email: stringArg() },
      resolve: (_, { email }, ctx) => 
      ctx.prisma.users({ where: { email: email } })
    })
  }
})

export default Query