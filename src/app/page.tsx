import {PrismaClient} from '@prisma/client'

export default async function Home() {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({});
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <pre>{JSON.stringify(users)}</pre>
        </main>
    );
}
