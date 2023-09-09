/*
 Navicat Premium Data Transfer

 Source Server         : localhost-cpd
 Source Server Type    : PostgreSQL
 Source Server Version : 140008 (140008)
 Source Host           : localhost:5432
 Source Catalog        : appointment
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140008 (140008)
 File Encoding         : 65001

 Date: 09/09/2023 16:43:15
*/


-- ----------------------------
-- Table structure for appointment
-- ----------------------------
DROP TABLE IF EXISTS "public"."appointment";
CREATE TABLE "public"."appointment" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "uid" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "desc" text COLLATE "pg_catalog"."default" NOT NULL,
  "status_id" int4 NOT NULL,
  "is_archived" bool NOT NULL,
  "is_active" bool NOT NULL,
  "is_delete" bool NOT NULL,
  "created_dt" timestamp(6) NOT NULL,
  "created_by" int4 NOT NULL,
  "created_by_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "updated_dt" timestamp(6) NOT NULL,
  "updated_by" int4 NOT NULL,
  "updated_by_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "public"."appointment" OWNER TO "root";

-- ----------------------------
-- Records of appointment
-- ----------------------------
BEGIN;
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (1, '82aa1154-d3d2-4003-955b-d9d07cca7602', 'Appointment 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 'f', 't', 'f', '2023-01-06 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 15:03:16.244', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (2, '82aa1154-d3d2-4003-955b-d9d07cca7603', 'Appointment 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 'f', 't', 'f', '2023-01-07 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 15:03:16.244', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (3, '7596f251-47d3-4e18-b651-4852933382bd', 'Appointment 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 't', 't', 'f', '2023-01-01 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 16:21:47.237', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (4, '4247e2b2-3f89-4434-88fc-d526fc3cd295', 'Appointment 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 1, 'f', 't', 'f', '2023-01-02 15:00:00', 1, 'โรบินฮู้ด', '2023-09-09 14:16:20.287', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (5, '82aa1154-d3d2-4003-955b-d9d07cca7605', 'Appointment 9', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 'f', 't', 'f', '2023-01-09 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 15:03:16.244', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (6, '82aa1154-d3d2-4003-955b-d9d07cca7606', 'Appointment 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 'f', 't', 'f', '2023-01-10 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 15:03:16.244', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (7, '82aa1154-d3d2-4003-955b-d9d07cca76b8', 'Appointment 3x', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 1, 'f', 't', 'f', '2023-01-02 10:00:00', 1, 'โรบินฮู้ด', '2023-09-09 14:16:20.287', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (8, '82aa1154-d3d2-4003-955b-d9d07cca76b9', 'Appointment 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 'f', 't', 'f', '2023-01-04 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 15:03:16.244', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (9, '82aa1154-d3d2-4003-955b-d9d07cca7601', 'Appointment 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 'f', 't', 'f', '2023-01-05 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 15:03:16.244', 1, 'โรบินฮู้ด');
INSERT INTO "public"."appointment" ("id", "uid", "name", "desc", "status_id", "is_archived", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (10, '82aa1154-d3d2-4003-955b-d9d07cca7604', 'Appointment 8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id aliquet tellus. Ut fringilla consectetur lacus eget faucibus. Sed tempus nunc quis quam pretium faucibus. Cras dapibus consectetur interdum. Vestibulum ac facilisis ante. Praesent posuere fermentum purus, at ornare tortor accumsan quis. Nulla facilisi. Donec ornare vulputate orci sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus ut ex metus.', 3, 'f', 't', 'f', '2023-01-08 00:00:00', 1, 'โรบินฮู้ด', '2023-09-09 15:03:16.244', 1, 'โรบินฮู้ด');
COMMIT;

-- ----------------------------
-- Table structure for appointment_comment
-- ----------------------------
DROP TABLE IF EXISTS "public"."appointment_comment";
CREATE TABLE "public"."appointment_comment" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "appointment_id" int4 NOT NULL,
  "comment" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "is_active" bool NOT NULL,
  "is_delete" bool NOT NULL,
  "created_dt" timestamp(6) NOT NULL,
  "created_by" int4 NOT NULL,
  "created_by_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "updated_dt" timestamp(6) NOT NULL,
  "updated_by" int4 NOT NULL,
  "updated_by_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "public"."appointment_comment" OWNER TO "root";

-- ----------------------------
-- Records of appointment_comment
-- ----------------------------
BEGIN;
INSERT INTO "public"."appointment_comment" ("id", "appointment_id", "comment", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (20, 7, 'ทดสอบ', 't', 'f', '2023-09-09 16:42:46.38', 2, 'แบทแมน', '2023-09-09 16:42:46.38', 2, 'แบทแมน');
INSERT INTO "public"."appointment_comment" ("id", "appointment_id", "comment", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (21, 7, 'ทดสอบ', 't', 'f', '2023-09-09 16:42:52.615', 2, 'แบทแมน', '2023-09-09 16:42:52.615', 2, 'แบทแมน');
INSERT INTO "public"."appointment_comment" ("id", "appointment_id", "comment", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (22, 7, 'ทดสอบ', 't', 'f', '2023-09-09 16:42:53.162', 2, 'แบทแมน', '2023-09-09 16:42:53.162', 2, 'แบทแมน');
COMMIT;

-- ----------------------------
-- Table structure for status
-- ----------------------------
DROP TABLE IF EXISTS "public"."status";
CREATE TABLE "public"."status" (
  "id" int4 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."status" OWNER TO "root";

-- ----------------------------
-- Records of status
-- ----------------------------
BEGIN;
INSERT INTO "public"."status" ("id", "name") VALUES (1, 'To Do');
INSERT INTO "public"."status" ("id", "name") VALUES (2, 'In Progress');
INSERT INTO "public"."status" ("id", "name") VALUES (3, 'Done');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "pwd" varchar(255) COLLATE "pg_catalog"."default",
  "is_active" bool,
  "is_delete" bool,
  "created_dt" timestamp(6),
  "created_by" int4,
  "created_by_name" varchar(255) COLLATE "pg_catalog"."default",
  "updated_dt" timestamp(6),
  "updated_by" int4,
  "updated_by_name" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."user" OWNER TO "root";

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO "public"."user" ("id", "name", "email", "pwd", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (7, 'test', 'test@gmail.com', '$2a$10$XGstLSu3NdNZLapS0qdfDu.pOh3jj6174SzDyE0zh3MVRiiIGVfQy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user" ("id", "name", "email", "pwd", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (1, 'โรบินฮู้ด', 'user1@robinhood.co.th', '$2a$10$XGstLSu3NdNZLapS0qdfDu.pOh3jj6174SzDyE0zh3MVRiiIGVfQy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user" ("id", "name", "email", "pwd", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (2, 'แบทแมน', 'user2@robinhood.co.th', '$2a$10$XGstLSu3NdNZLapS0qdfDu.pOh3jj6174SzDyE0zh3MVRiiIGVfQy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user" ("id", "name", "email", "pwd", "is_active", "is_delete", "created_dt", "created_by", "created_by_name", "updated_dt", "updated_by", "updated_by_name") OVERRIDING SYSTEM VALUE VALUES (3, 'แคทวูแมน', 'user3@robinhood.co.th', '$2a$10$XGstLSu3NdNZLapS0qdfDu.pOh3jj6174SzDyE0zh3MVRiiIGVfQy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Auto increment value for appointment
-- ----------------------------
SELECT setval('"public"."appointment_id_seq"', 10, true);

-- ----------------------------
-- Primary Key structure for table appointment
-- ----------------------------
ALTER TABLE "public"."appointment" ADD CONSTRAINT "appointment_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for appointment_comment
-- ----------------------------
SELECT setval('"public"."appointment_comment_id_seq"', 22, true);

-- ----------------------------
-- Primary Key structure for table appointment_comment
-- ----------------------------
ALTER TABLE "public"."appointment_comment" ADD CONSTRAINT "appointment_comment_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table status
-- ----------------------------
ALTER TABLE "public"."status" ADD CONSTRAINT "mast_status_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for user
-- ----------------------------
SELECT setval('"public"."user_id_seq"', 29, true);

-- ----------------------------
-- Uniques structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_email_key" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table appointment_comment
-- ----------------------------
ALTER TABLE "public"."appointment_comment" ADD CONSTRAINT "appointment_comment_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "public"."appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
