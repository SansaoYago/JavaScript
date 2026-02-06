
# Desafios JavaScript — Arrays de Objetos (map, filter, reduce)

Este conjunto de exercícios tem como objetivo desenvolver fluência na manipulação de arrays simples e arrays de objetos utilizando:

- for...of
- forEach
- map()
- filter()
- reduce()

## Instruções

Para cada exercício:
1. Resolva primeiro utilizando `for...of`.
2. Depois refaça utilizando `map`, `filter` ou `reduce`.
3. Compare as abordagens.

---

## 🟢 NÍVEL 1 — Aquecimento (map + filter)

### Base de dados

```js
const users = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carlos", idade: 16 },
  { nome: "Diana", idade: 28 },
  { nome: "Eduardo", idade: 19 }
];
```

### Exercícios

1. Criar um array somente com os nomes.
2. Criar um array apenas com usuários maiores de idade.
3. Criar um array apenas com os nomes dos usuários maiores de idade.

---

## 🟡 NÍVEL 2 — Intermediário (map + filter + reduce)

### Base de dados

```js
const produtos = [
  { nome: "Teclado", preco: 120, qtd: 2 },
  { nome: "Mouse", preco: 80, qtd: 1 },
  { nome: "Monitor", preco: 900, qtd: 1 },
  { nome: "Cabo HDMI", preco: 40, qtd: 3 }
];
```

### Exercícios

4. Criar um array contendo o valor total de cada produto (preco * qtd).
5. Calcular o valor total da compra.
6. Criar um array apenas com produtos cujo valor total seja acima de R$100.

---

## 🔴 NÍVEL 3 — Avançado (reduce real)

### Base de dados

```js
const pedidos = [
  { cliente: "Ana", total: 250 },
  { cliente: "Bruno", total: 120 },
  { cliente: "Ana", total: 180 },
  { cliente: "Carlos", total: 300 },
  { cliente: "Bruno", total: 90 }
];
```

### Exercícios

7. Criar um objeto agrupando o total gasto por cliente.

Resultado esperado:

```js
{
  Ana: 430,
  Bruno: 210,
  Carlos: 300
}
```

8. Descobrir quem foi o cliente que mais gastou.

---

## Dica Mental para o reduce()

Sempre pense:

> O acumulador começa como quê?

- Número → soma
- Array → lista
- Objeto → agrupamento

---

## Objetivo

Ao finalizar estes desafios, você deverá:
- Ter domínio prático de arrays de objetos.
- Usar `map`, `filter` e `reduce` com naturalidade.
- Escrever código mais limpo, funcional e profissional.

Bons estudos 🚀
