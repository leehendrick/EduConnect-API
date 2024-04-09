-- CreateTable
CREATE TABLE `user_typs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bairro` VARCHAR(191) NOT NULL,
    `distrito` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` INTEGER NULL,
    `senha` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `data_registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_typsId` INTEGER NOT NULL,
    `user_statusId` INTEGER NOT NULL,
    `addressesId` INTEGER NOT NULL,

    UNIQUE INDEX `users_nome_key`(`nome`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_user_typsId_fkey` FOREIGN KEY (`user_typsId`) REFERENCES `user_typs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_user_statusId_fkey` FOREIGN KEY (`user_statusId`) REFERENCES `user_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_addressesId_fkey` FOREIGN KEY (`addressesId`) REFERENCES `addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
