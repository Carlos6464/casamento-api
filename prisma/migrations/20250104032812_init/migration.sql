-- CreateTable
CREATE TABLE "Presente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "nome_user" TEXT,
    "email_user" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Presente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "recado" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recado_pkey" PRIMARY KEY ("id")
);
