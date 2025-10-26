// prisma.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-multi-str
  console.warn('PrismaClient is being created in production. This is a potential security risk. Make sure to disable migrations and turn off client schema generation');
}

export default prisma;