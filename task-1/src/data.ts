import { Tree } from "./types";

export const data: Tree = {
  tree: [
    {
      name: "name1",
      tree_1: [
        {
          name: "name2",
        },
        {
          name: "name3",
        },
        {
          name: "name4",
          tree_2: [
            {
              name: "name5",
            },
            {
              name: "name6",
            },
            {
              tree_3: [
                {
                  name: undefined,
                },
                {
                  name: "name7",
                  age: 20,
                },
                {
                  name: "name8",
                  age: 15,
                },
                {
                  name: "name9",
                  age: 31,
                },
                {
                  name: "name10",
                  age: 30,
                },
                {
                  name: undefined,
                  age: undefined,
                },
                {
                  name: "empty",
                  age: "empty",
                },
              ],
            },
          ],
        },
        {
          name: "name11",
        },
      ],
    },
    {
      name: "name12",
      tree_4: [
        {
          name: "name3",
        },
      ],
    },
  ],
};
