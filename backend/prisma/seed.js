const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
    console.log("Limpando dados anteriores...");

    await prisma.subsevents.deleteMany();
    await prisma.events.deleteMany();
    await prisma.users.deleteMany();

    console.log("Inserindo usuários...");

    await prisma.users.createMany({
        data: [
            { email: "usuario@ifrs.edu.br", password: "$2b$10$382cEJJYi5YxSBNvWmufHeoPHX3dqIB9NP2R2XWzt/w.DnC0gmCr2", role: "user" },
            { email: "admin@ifrs.edu.br", password: "$2b$10$/JLXJ62EBlk1bNq0xmpvMuTLDJb6AWmZUs74lgEJb4Z.J9.3kFJM.", role: "admin" },
        ],
        skipDuplicates: true,
    });

    console.log("Usuários criados!");
    console.log("Criando eventos");

    await prisma.events.createMany({
        data: [
            { nome: "Passeata 7 de setembro", data: new Date("2025-10-05") },
            { nome: "Corrida de cariola", data: new Date("2025-12-15") },
            { nome: "Passeata de Cachorros", data: new Date("2025-11-11") },
            { nome: "Circo de Palhaços", data: new Date("2026-01-29") },
            { nome: "Corrida de Hotwaheels", data: new Date("2025-12-22") },
            { nome: "Corrida de Natal", data: new Date("2025-12-24") },
        ],
        skipDuplicates: true,
    });
    
    console.log("Eventos criados!");
    console.log("Seed concluído.");
}
main()
    .catch((e) => {
        console.error("Erro no seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
