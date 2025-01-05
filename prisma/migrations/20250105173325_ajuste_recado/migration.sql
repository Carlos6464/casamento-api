/*
  Warnings:

  - You are about to alter the column `preco` on the `Presente` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Presente" ALTER COLUMN "preco" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Recado" ALTER COLUMN "recado" SET DATA TYPE TEXT;
