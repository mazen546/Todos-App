const data = [
  {
    id: "9d8f10db-ca2a-4409-9a1d-c09d0abe45bf",
    name: "School",
    iconName: "MenuBook",
    done: false,
    total: 12,
    undone: 9,
    done: 1,
    color: "#fc76a1",
    tasks: [
      {
        id: "a9dce516-6c00-499a-bcaa-5e8a6d2aee69",
        title:
          "Write a short paragraph about a historical event or significant figure",
        done: false,
        startDate: "2023-09-18",
        endDate: "2025-03-10",
        nestedTasks: [
          {
            id: "8bd229d4-db45-4f26-8420-b5af135aed05",
            title: "Identify the event or figure",
            done: false,
            startDate: "2023-09-12",
            endDate: "2023-08-31",
          },
          {
            id: "88e5d87a-b555-429e-b8b0-9df8a41ee795",
            title: "Provide a brief summary of the event or figure",
            done: false,
            startDate: "2023-09-15",
            endDate: "2023-08-31",
          },
          {
            id: "a6833150-bf15-457d-90f8-69ceca498d5c",
            title:
              "Discuss the significance or importance of the event or figure",
            done: true,
            startDate: "2023-09-16",
            endDate: "2023-08-31",
          },
          {
            id: "4c7fea9a-07c7-431d-bd49-e572186e3e58",
            title:
              "Provide examples of how the event or figure has influenced society",
            done: false,
            startDate: "2023-09-16",
            endDate: "2023-09-23",
          },
        ],
      },
      {
        id: "3f3141e1-bbf3-4e96-b2c3-1391d5fa4a64",
        title: "Write a persuasing essay about a particular issue or topic",
        done: false,
        startDate: "2023-09-16",
        endDate: "2025-10-04",
        nestedTasks: [
          {
            id: "7c3753fb-0fb0-4206-a19f-2161e154f26a",
            title: "Identify the issue or topic",
            done: false,
            startDate: "2023-09-14",
            endDate: "2023-08-28",
          },
        ],
      },
      {
        id: "9aab945b-9137-448f-8e48-ec19084de2a4",
        title: "Solve a math problem or equation",
        done: false,
        startDate: "2023-09-19",
        endDate: "2023-08-31",
        nestedTasks: [
          {
            id: "b3938057-d64d-4934-97e9-d4cf8bd2d992",
            title: "Identify the problem or equation",
            done: true,
            startDate: "2023-09-15",
            endDate: "2023-08-31",
          },
          {
            id: "1d1d9b99-9338-458e-a61a-3f4a5b1e1155",
            title:
              "Provide a clear and concise explanation of the problem or equation",
            done: false,
            startDate: "2023-09-16",
            endDate: "2023-09-25",
          },
          {
            id: "1d1d9b99-9338-458e-a61a-3f4a5b1ee236",
            title: "Use step-by-step methods to solve the problem or equation",
            done: false,
            startDate: "2023-09-15",
            endDate: "2023-08-31",
          },
        ],
      },
    ],
    completedTasks: [
      {
        id: "22dd1f26-2e7a-4aa6-979f-17e470fae9fe",
        title: "Create a list of items and their prices",
        done: true,
        startDate: "2023-09-20",
        endDate: "2023-10-12",
        nestedTasks: [],
      },
    ],
  },
  {
    id: "9caf06b8-d172-43d3-8322-4003968e59e7",
    name: "Personal",
    iconName: "Person",
    total: 11,
    undone: 8,
    done: 1,
    color: "#70c4bf",
    tasks: [
      {
        id: "87749df5-d751-4646-a658-8987d0d9c66b",
        title: "Research a historical event or significant figure",
        done: false,
        startDate: "2023-09-15",
        endDate: "2023-10-16",
        nestedTasks: [
          {
            id: "d157a7cd-0b7e-47d3-a383-7fbb697c14c3",
            title: "Identify the event or figure",
            done: true,
            startDate: "2023-09-13",
            endDate: "2023-09-29",
          },
          {
            id: "4bdb72fc-bbe5-4b34-9dc3-b9e92eaf1167",
            title: "Provide a brief summary of the event or figure",
            done: false,
            startDate: "2023-09-17",
            endDate: "2023-08-31",
          },
          {
            id: "abb6c805-87a8-4caa-b662-d58d5ba465de",
            title:
              "Discuss the significance or importance of the event or figure",
            done: false,
            startDate: "2023-09-15",
            endDate: "2023-08-31",
          },
          {
            id: "39c19b71-bc01-48c6-ba6d-3829b0f48bf6",
            title:
              "Provide examples of how the event or figure has influenced you or your life",
            done: false,
            startDate: "2023-09-12",
            endDate: "2023-08-31",
          },
        ],
      },
      {
        id: "b3dfa1c7-a795-4ef9-8e19-57bc3fc95fa3",
        title: "Write an essay on a particular topic",
        done: false,
        startDate: "2023-09-17",
        endDate: "2023-08-31",
        nestedTasks: [
          {
            id: "f88898ad-4c54-440e-8fd0-f4f80acb9444",
            title: "Identify the issue or topic",
            done: false,
            startDate: "2023-09-13",
            endDate: "2023-08-31",
          },
        ],
      },
      {
        id: "552c24d4-156b-4c30-8758-002cf974f4af",
        title: "Play a game or role-playing game",
        done: false,
        startDate: "2023-09-18",
        endDate: "2023-10-07",
        nestedTasks: [
          {
            id: "c6cbc1e8-7cd9-44e9-9e0f-1e6476ae787e",
            title: "Identify the game or role-playing game you want to play",
            done: true,
            startDate: "2023-09-16",
            endDate: "2023-09-25",
          },
          {
            id: "958e4860-6ab9-4614-9af2-ab1328b81d38",
            title: "Read the rules and instructions carefully",
            done: false,
            startDate: "2023-09-15",
            endDate: "2023-09-25",
          },
        ],
      },
    ],
    completedTasks: [
      {
        id: "5b1cda24-e54e-42f0-bb4d-203e4b73aeaa",
        title: "Shopping list for the week",
        done: true,
        startDate: "2023-09-16",
        endDate: "2023-10-17",
        nestedTasks: [],
      },
    ],
  },
  {
    id: "2e5c87b2-0632-4186-a222-6891ae2e1f9b",
    name: "Design",
    iconName: "Brush",
    total: 7,
    undone: 5,
    done: 1,
    color: "#ac6dde",
    tasks: [
      {
        id: "5768f76e-45e5-4d48-b273-f75efeaacee0",
        title: "Logo design",
        done: false,
        startDate: "2023-09-15",
        endDate: "2023-10-10",
        nestedTasks: [
          {
            id: "d5841ba8-6959-434a-aa70-2dd8cac838d2",
            title: "Create a logo concept for a business or brand",
            done: true,
            startDate: "2023-09-15",
            endDate: "2023-09-29",
          },
          {
            id: "0a2b7ec2-0cc7-4955-9035-a99961117765",
            title:
              "Choose a color scheme and typography that aligns with the brand's values",
            done: false,
            startDate: "2023-09-15",
            endDate: "2023-09-25",
          },
        ],
      },
      {
        id: "1620f519-b06e-4d36-b562-fcd239719f7f",
        title: "Product design:",
        done: false,
        startDate: "2023-09-17",
        endDate: "2023-10-14",
        nestedTasks: [
          {
            id: "ef90927e-3d0f-47d0-a872-6298873ea813",
            title:
              "Create a product design that is visually appealing and easy to use",
            done: false,
            startDate: "2023-09-13",
            endDate: "2023-09-27",
          },
        ],
      },
      {
        id: "299ec142-970e-47ef-bc46-c03472f6ed03",
        title: "Packaging design",
        done: false,
        startDate: "2023-09-18",
        endDate: "2023-10-09",
        nestedTasks: [],
      },
    ],
    completedTasks: [
      {
        id: "8f96fa37-6ad8-4fe1-8ffd-48f4fee9e87b",
        title: "Website design",
        done: true,
        startDate: "2023-09-16",
        endDate: "2023-10-11",
        nestedTasks: [],
      },
    ],
  },
  {
    id: "01870dba-c909-49d4-af45-85717a39a1a5",
    name: "Groceries",
    iconName: "LocalGroceryStore",
    total: 8,
    undone: 5,
    done: 3,
    color: "#cfb452",
    tasks: [
      {
        id: "e697b58d-5f16-479e-b639-870a059ec317",
        title: "Buying groceries",
        done: false,
        startDate: "2023-09-15",
        endDate: "2023-10-08",
        nestedTasks: [
          {
            id: "8067543d-d34a-4777-919b-c92abf373c00",
            title: "Pick up the groceries at the store",
            done: false,
            startDate: "2023-09-14", // added property with random date
            endDate: "2023-09-25", // added property with random date
          },
          {
            id: "be19f59f-3117-4d8b-b306-4655f52c1027",
            title: "Pack the groceries in the correct bags or containers",
            done: false,
            startDate: "2023-09-16", // added property with random date
            endDate: "2023-09-29", // added property with random date
          },
        ],
      },

      {
        id: "ca6b1c83-7dd1-4da5-8355-4112988600f6",
        title: "Buying produce",
        done: false,
        startDate: "2023-09-17",
        endDate: "2023-10-13",
        nestedTasks: [
          {
            id: "294c1e9e-774c-4a28-9602-7810927ba6df",
            title: "Pick up the produce at the store",
            done: false,
            startDate: "2023-09-18", // added property with random date
            endDate: "2023-09-27", // added property with random date
          },
        ],
      },
    ],
    completedTasks: [
      {
        id: "9f365fde-1da5-443e-9cbd-bdcfe9c1e0c0",
        title: "Cleaning and organizing the pantry",
        done: true,
        startDate: "2023-09-16",
        endDate: "2023-10-03",
        nestedTasks: [],
      },
      {
        id: "f91b4f4a-e592-4b79-9e66-7951077f318b",
        title: "Buying snacks and sweets",
        done: true,
        startDate: "2023-09-18",
        endDate: "2023-10-07",
        nestedTasks: [
          {
            id: "46244ad0-a996-4ea5-9a79-d9e67c880efe",
            title: "Pick up the snacks and sweets at the store",
            done: true,
          },
        ],
      },
    ],
  },
];
export default data;
