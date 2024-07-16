import { relations } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgEnum,
  pgTable,
  smallint,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

const UploadedFilesTable = pgTable("uploaded_files", {
  id: uuid("id").primaryKey().defaultRandom(),
  assetId: text("asset_id").notNull(),
  url: text("url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => {
      return new Date();
    }),
});

const VideoStatusEnum = pgEnum("video-status", [
  "in-queue",
  "generating-text-content",
  "generating-audio",
  "generating-subtitles",
  "generating-images",
  "rendering",
  "completed",
]);

const VideosTable = pgTable("videos", {
  id: uuid("id").primaryKey().defaultRandom(),
  topic: text("topic").notNull(),
  description: text("description"),
  title: text("title"),
  caption: text("caption"),
  hashtags: text("hashtags").array(),
  text: text("text"),
  fileId: uuid("fileId").references(() => {
    return UploadedFilesTable.id;
  }),
  status: VideoStatusEnum("status").notNull().default("in-queue"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => {
      return new Date();
    }),
});

const VoiceEnum = pgEnum("voice", [
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
]);

const AudiosTable = pgTable("audios", {
  id: uuid("id").primaryKey().defaultRandom(),
  voice: VoiceEnum("voice").notNull(),
  videoId: uuid("videoId")
    .notNull()
    .references(() => {
      return VideosTable.id;
    }),
  fileId: uuid("fileId")
    .notNull()
    .references(() => {
      return UploadedFilesTable.id;
    }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => {
      return new Date();
    }),
});

const SubtitlesTable = pgTable("subtitles", {
  id: uuid("id").primaryKey().defaultRandom(),
  audioId: uuid("audioId")
    .notNull()
    .references(() => {
      return AudiosTable.id;
    }),
  fileId: uuid("fileId")
    .notNull()
    .references(() => {
      return UploadedFilesTable.id;
    }),
  rows: jsonb("object").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => {
      return new Date();
    }),
});

const StyleEnum = pgEnum("style", ["artistic", "realistic"]);
const ColorPaletteEnum = pgEnum("color_palette", [
  "achromatic",
  "bright",
  "cold",
  "dim",
  "multicolored",
  "natural",
  "neon",
  "pastel",
  "vintage",
  "warm",
]);

const QualityEnum = pgEnum("quality", ["HD", "SD"]);

const ImagesTable = pgTable("images", {
  id: uuid("id").primaryKey().defaultRandom(),
  seed: integer("seed").notNull(),
  prompt: text("prompt").notNull(),
  style: StyleEnum("style").notNull(),
  colorPalette: ColorPaletteEnum("color_palette").notNull(),
  quality: QualityEnum("quality").notNull(),
  videoId: uuid("videoId")
    .notNull()
    .references(() => {
      return VideosTable.id;
    }),
  order: smallint("order").notNull(),
  fileId: uuid("fileId")
    .notNull()
    .references(() => {
      return UploadedFilesTable.id;
    }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => {
      return new Date();
    }),
});

const VideoRelations = relations(VideosTable, ({ one, many }) => {
  return {
    audio: one(AudiosTable),
    file: one(UploadedFilesTable, {
      fields: [VideosTable.fileId],
      references: [UploadedFilesTable.id],
    }),
    images: many(ImagesTable),
  };
});

const AudioRelations = relations(AudiosTable, ({ one }) => {
  return {
    video: one(VideosTable, {
      fields: [AudiosTable.videoId],
      references: [VideosTable.id],
    }),
    file: one(UploadedFilesTable, {
      fields: [AudiosTable.fileId],
      references: [UploadedFilesTable.id],
    }),
    subtitles: one(SubtitlesTable),
  };
});

const ImageRelations = relations(ImagesTable, ({ one }) => {
  return {
    file: one(UploadedFilesTable, {
      fields: [ImagesTable.fileId],
      references: [UploadedFilesTable.id],
    }),
    video: one(VideosTable, {
      fields: [ImagesTable.videoId],
      references: [VideosTable.id],
    }),
  };
});

const SubtitlesRelations = relations(SubtitlesTable, ({ one }) => {
  return {
    audio: one(AudiosTable, {
      fields: [SubtitlesTable.audioId],
      references: [AudiosTable.id],
    }),
    file: one(UploadedFilesTable, {
      fields: [SubtitlesTable.fileId],
      references: [UploadedFilesTable.id],
    }),
  };
});

const UsersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => {
      return new Date();
    }),
});

export {
  AudioRelations,
  AudiosTable,
  ColorPaletteEnum,
  ImageRelations,
  ImagesTable,
  QualityEnum,
  StyleEnum,
  SubtitlesRelations,
  SubtitlesTable,
  UploadedFilesTable,
  UsersTable,
  VideoRelations,
  VideosTable,
  VideoStatusEnum,
  VoiceEnum,
};
