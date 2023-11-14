import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

// SELECT

// db("products")
//   .select("id", "name", "price")
//   //   .where({ id: 1 })
//   .where("id", ">", 1)
//   .orderBy("name")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const id = 1

// db.raw("select id, name, price from products where id > ?", [id])
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// INSERT
// db("products")
//   .insert(
//     [
//       {
//         name: "iphone15",
//         price: 555,
//       },
//     ],
//     ["id", "name"]
//   )
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// UPDATE
// db("products").update({ price: 789 }, ["id", "name", "price"]).where({ id: 2 })
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const test = async () => {
  const trx = await db.transaction();
  try {
    const product = await db
      .insert(
        {
          name: "iDI",
          price: 54321,
        },
        ["id", "name", "price"]
      )
      .transacting(trx);

    console.log(product);

    await trx.commit();
  } catch (err) {
    console.log(err);
    await trx.rollback();
  }
};

test();
// DELETE
// db("products")
//   .where({ id: 7 })
//   .del()
//   .returning(['id', 'name', 'price'])
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
