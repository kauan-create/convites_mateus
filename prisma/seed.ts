import prisma from '../src/lib/prisma';

async function main() {
  console.log('Start seeding...');
  
  const familia = await prisma.familia.create({
    data: {
      nome_familia: 'Família Starter',
      convidados: {
        create: [
          { nome: 'Convidado 1' },
          { nome: 'Convidado 2' }
        ]
      }
    }
  });

  console.log(`Created familia with id: ${familia.id}`);
  console.log('Seeding finished.');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });