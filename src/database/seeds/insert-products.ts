import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { Name: "Nhoque quatro queijos", price: 45 },
        { Name: "Isca de frango", price: 60 },
        { Name: "Tilápia com alcaparras", price: 100 },
        { Name: "Bolinho de mandioca", price: 75 },
        { Name: "Escondidinho de carne de sol", price: 65 },
        { Name: "Porção de batatas fritas", price: 40 },
        { Name: "Executivo de frango grelhado", price: 36 },
        { Name: "Executivo de tilápia grelhada", price: 39 },
        { Name: "Caldo de palmito", price: 30 },
        { Name: "Refrigerante 350ml", price: 7.5 },
        { Name: "Suco de laranja 440ml", price: 10 },
    ]);
};
