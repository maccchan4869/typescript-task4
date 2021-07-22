import {MigrationInterface, QueryRunner} from "typeorm";

export class init1626992757540 implements MigrationInterface {
    name = 'init1626992757540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `title` varchar(255) NOT NULL, `age` varchar(255) NOT NULL DEFAULT '0', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `articles` (`id` int NOT NULL AUTO_INCREMENT, `user_id` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `content` text NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tags` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `articlesTags` (`id` int NOT NULL AUTO_INCREMENT, `article_id` int NOT NULL, `tag_id` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `articles` ADD CONSTRAINT `FK_87bb15395540ae06337a486a77a` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `articlesTags` ADD CONSTRAINT `FK_7e5d04aa029cdda7d08b2681317` FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `articlesTags` ADD CONSTRAINT `FK_a9b9dfed7b62d28f8eae72c2815` FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `articlesTags` DROP FOREIGN KEY `FK_a9b9dfed7b62d28f8eae72c2815`");
        await queryRunner.query("ALTER TABLE `articlesTags` DROP FOREIGN KEY `FK_7e5d04aa029cdda7d08b2681317`");
        await queryRunner.query("ALTER TABLE `articles` DROP FOREIGN KEY `FK_87bb15395540ae06337a486a77a`");
        await queryRunner.query("DROP TABLE `articlesTags`");
        await queryRunner.query("DROP TABLE `tags`");
        await queryRunner.query("DROP TABLE `articles`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
