import { UsersTable, db, eq } from "~/_libs/database/database";
import { type UserInsert } from "./libs/types/types";

class UserDao {
  async getUserByEmail(email: string) {
    const userByEmail = await db.query.UsersTable.findFirst({
      where: (user) => {
        return eq(user.email, email);
      },
    });

    return userByEmail ?? null;
  }

  async getUserById(id: string) {
    const userById = await db.query.UsersTable.findFirst({
      where: (user) => {
        return eq(user.id, id);
      },
    });

    return userById ?? null;
  }

  async createUser({ email, passwordHash }: UserInsert) {
    const [createdUser] = await db
      .insert(UsersTable)
      .values({
        email,
        passwordHash,
      })
      .returning();

    return createdUser ?? null;
  }
}

export { UserDao };
