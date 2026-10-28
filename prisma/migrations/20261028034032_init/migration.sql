SET FOREIGN_KEY_CHECKS=0;
-- CreateTable
CREATE TABLE `account_user` (
    `id` VARCHAR(72) NOT NULL,
    `username` VARCHAR(120) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `passwordHash` VARCHAR(255) NOT NULL,
    `fullName` VARCHAR(180) NOT NULL,
    `role` ENUM('CLIENT', 'CURATOR_ADMIN') NOT NULL DEFAULT 'CLIENT',
    `avatarUrl` VARCHAR(700) NULL,
    `phone` VARCHAR(60) NULL,
    `organization` VARCHAR(200) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `account_user_username_key`(`username`),
    UNIQUE INDEX `account_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photo_category` (
    `id` VARCHAR(72) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `description` TEXT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `photo_category_slug_key`(`slug`),
    INDEX `photo_category_sortOrder_idx`(`sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photo_collection` (
    `id` VARCHAR(72) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `rollNumber` VARCHAR(80) NOT NULL,
    `medium` VARCHAR(200) NOT NULL,
    `curatorNote` TEXT NOT NULL,
    `aspect` ENUM('PORTRAIT', 'LANDSCAPE') NOT NULL DEFAULT 'PORTRAIT',
    `aspectRatioClass` VARCHAR(50) NOT NULL DEFAULT 'aspect-[4/5]',
    `coverImage` VARCHAR(700) NULL,
    `imageCount` INTEGER NOT NULL DEFAULT 0,
    `isVisible` BOOLEAN NOT NULL DEFAULT true,
    `featuredOnHome` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `photo_collection_isVisible_sortOrder_idx`(`isVisible`, `sortOrder`),
    INDEX `photo_collection_featuredOnHome_idx`(`featuredOnHome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_package` (
    `id` VARCHAR(72) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `serviceType` ENUM('ARCHITECTURAL_MONOGRAPH', 'EDITORIAL_PORTRAITURE', 'COMMERCIAL_CAMPAIGN', 'PRINT_ACQUISITION') NOT NULL,
    `basePrice` DECIMAL(10, 2) NOT NULL,
    `priceDisplay` VARCHAR(100) NOT NULL,
    `durationEstimate` VARCHAR(120) NOT NULL,
    `deliverables` JSON NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `service_package_isActive_sortOrder_idx`(`isActive`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photography_work` (
    `id` VARCHAR(72) NOT NULL,
    `title` VARCHAR(220) NOT NULL,
    `categoryId` VARCHAR(72) NOT NULL,
    `collectionId` VARCHAR(72) NULL,
    `seriesName` VARCHAR(200) NOT NULL,
    `location` VARCHAR(200) NOT NULL,
    `year` INTEGER NOT NULL,
    `medium` VARCHAR(220) NOT NULL,
    `edition` VARCHAR(180) NOT NULL,
    `aspectRatio` ENUM('PORTRAIT', 'LANDSCAPE') NOT NULL DEFAULT 'PORTRAIT',
    `statement` TEXT NOT NULL,
    `imageUrl` VARCHAR(700) NOT NULL,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `photography_work_categoryId_idx`(`categoryId`),
    INDEX `photography_work_collectionId_idx`(`collectionId`),
    INDEX `photography_work_isArchived_isFeatured_sortOrder_idx`(`isArchived`, `isFeatured`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commission_inquiry` (
    `id` VARCHAR(72) NOT NULL,
    `clientId` VARCHAR(72) NOT NULL,
    `servicePackageId` VARCHAR(72) NULL,
    `clientName` VARCHAR(180) NOT NULL,
    `clientEmail` VARCHAR(255) NOT NULL,
    `organization` VARCHAR(200) NULL,
    `projectType` ENUM('EDITORIAL', 'PORTRAIT', 'COMMERCIAL', 'ACQUISITION') NOT NULL,
    `budgetTier` VARCHAR(120) NOT NULL,
    `projectBrief` TEXT NOT NULL,
    `clientMessage` TEXT NULL,
    `targetTimeline` VARCHAR(150) NOT NULL,
    `location` VARCHAR(200) NULL,
    `status` ENUM('NEW', 'IN_REVIEW', 'REPLIED') NOT NULL DEFAULT 'NEW',
    `curatorReply` TEXT NULL,
    `repliedAt` VARCHAR(80) NULL,
    `repliedById` VARCHAR(72) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `commission_inquiry_clientId_idx`(`clientId`),
    INDEX `commission_inquiry_servicePackageId_idx`(`servicePackageId`),
    INDEX `commission_inquiry_repliedById_idx`(`repliedById`),
    INDEX `commission_inquiry_status_createdAt_idx`(`status`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exhibition_record` (
    `id` VARCHAR(72) NOT NULL,
    `title` VARCHAR(240) NOT NULL,
    `institution` VARCHAR(220) NOT NULL,
    `city` VARCHAR(150) NOT NULL,
    `year` INTEGER NOT NULL,
    `exhibitionType` ENUM('SOLO_EXHIBITION', 'INSTITUTIONAL', 'BIENNIAL', 'MONOGRAPH') NOT NULL,
    `pressMention` TEXT NOT NULL,
    `externalUrl` VARCHAR(700) NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `exhibition_record_year_sortOrder_idx`(`year`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_testimonial` (
    `id` VARCHAR(72) NOT NULL,
    `clientId` VARCHAR(72) NULL,
    `clientName` VARCHAR(180) NOT NULL,
    `clientTitle` VARCHAR(180) NOT NULL,
    `organization` VARCHAR(200) NOT NULL,
    `quote` TEXT NOT NULL,
    `serviceType` ENUM('EDITORIAL', 'PORTRAIT', 'COMMERCIAL', 'ACQUISITION') NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 5,
    `avatarImage` VARCHAR(700) NULL,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `client_testimonial_clientId_idx`(`clientId`),
    INDEX `client_testimonial_isFeatured_sortOrder_idx`(`isFeatured`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `studio_bio` (
    `id` VARCHAR(72) NOT NULL,
    `artistName` VARCHAR(180) NOT NULL,
    `studioName` VARCHAR(180) NOT NULL,
    `philosophyQuote` TEXT NOT NULL,
    `bioStatement` TEXT NOT NULL,
    `portraitImage` VARCHAR(700) NULL,
    `atelierLocation` VARCHAR(180) NOT NULL,
    `activeRepresentation` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `photography_work` ADD CONSTRAINT `photography_work_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `photo_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `photography_work` ADD CONSTRAINT `photography_work_collectionId_fkey` FOREIGN KEY (`collectionId`) REFERENCES `photo_collection`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_inquiry` ADD CONSTRAINT `commission_inquiry_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `account_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_inquiry` ADD CONSTRAINT `commission_inquiry_servicePackageId_fkey` FOREIGN KEY (`servicePackageId`) REFERENCES `service_package`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_inquiry` ADD CONSTRAINT `commission_inquiry_repliedById_fkey` FOREIGN KEY (`repliedById`) REFERENCES `account_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_testimonial` ADD CONSTRAINT `client_testimonial_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `account_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
SET FOREIGN_KEY_CHECKS=1;