-- CreateTable
CREATE TABLE "bestand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "verpackung" TEXT NOT NULL,
    "gewicht" INTEGER NOT NULL,
    "mhd" DATETIME NOT NULL,
    "anzahl" INTEGER NOT NULL
);
