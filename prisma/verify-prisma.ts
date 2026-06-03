import prisma from '../src/lib/prisma';

async function main() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Connected.');
  } catch (e) {
    console.error('❌ Connection failed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();