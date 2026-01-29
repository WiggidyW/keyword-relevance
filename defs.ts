import { Functions } from "objectiveai";
import { ExampleInput } from "./example_input";

export const Function: Functions.RemoteFunction = {
  type: "scalar.function",
  description:
    "Keyword-based Relevance Scoring. Discover how relevant a piece of content is to specific keywords.",
  input_schema: {
    type: "object",
    properties: {
      keywords: {
        type: "array",
        description: "Keywords to evaluate relevance against.",
        minItems: 1,
        items: {
          type: "string",
          description: "A keyword to evaluate relevance against.",
        },
      },
      content: {
        anyOf: [
          {
            type: "string",
            description: "Text content to be evaluated for relevance.",
          },
          {
            type: "image",
            description: "Image content to be evaluated for relevance.",
          },
          {
            type: "video",
            description: "Video content to be evaluated for relevance.",
          },
          {
            type: "audio",
            description: "Audio content to be evaluated for relevance.",
          },
          {
            type: "file",
            description: "File content to be evaluated for relevance.",
          },
          {
            type: "array",
            description:
              "Array of content pieces to be evaluated for relevance.",
            minItems: 1,
            items: {
              anyOf: [
                {
                  type: "string",
                  description: "Text content to be evaluated for relevance.",
                },
                {
                  type: "image",
                  description: "Image content to be evaluated for relevance.",
                },
                {
                  type: "video",
                  description: "Video content to be evaluated for relevance.",
                },
                {
                  type: "audio",
                  description: "Audio content to be evaluated for relevance.",
                },
                {
                  type: "file",
                  description: "File content to be evaluated for relevance.",
                },
              ],
            },
          },
        ],
      },
    },
    required: ["keywords", "content"],
  },
  tasks: [
    {
      type: "scalar.function",
      owner: "WiggidyW",
      repository: "keyword-relevance-joined",
      commit: "7033c63736294af2cf1e3a4b54963a24dc28e5d2",
      input: {
        $jmespath: "input",
      },
    },
    {
      type: "scalar.function",
      owner: "WiggidyW",
      repository: "keyword-relevance-split",
      commit: "17bc3d7703c3fa8ac576910e302d64e63225bb0c",
      input: {
        $jmespath: "input",
      },
    },
  ],
  output: {
    $jmespath: "avg(tasks)",
  },
};

export const Profile: Functions.RemoteProfile = {
  description:
    "The default profile for `WiggidyW/keyword-relevance`. Supports multi-modal content.",
  tasks: [
    {
      owner: "WiggidyW",
      repository: "keyword-relevance-joined",
      commit: "7033c63736294af2cf1e3a4b54963a24dc28e5d2",
    },
    {
      owner: "WiggidyW",
      repository: "keyword-relevance-split",
      commit: "17bc3d7703c3fa8ac576910e302d64e63225bb0c",
    },
  ],
};

export const ExampleInputs: ExampleInput[] = [
  {
    value: {
      keywords: ["machine learning", "neural networks", "AI"],
      content:
        "Deep learning has revolutionized computer vision through convolutional neural networks. These sophisticated algorithms can now identify objects in images with superhuman accuracy, powering everything from autonomous vehicles to medical diagnostics.",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["cooking", "italian cuisine"],
      content:
        "yo so basically u gotta boil the pasta til its al dente right?? then u toss it w/ some olive oil garlic n parmesan cheese... chefs kiss fr fr",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["quantum physics", "Schrödinger"],
      content:
        "THE CAT IS BOTH ALIVE AND DEAD UNTIL YOU OPEN THE BOX!!! This is the fundamental paradox that Erwin Schrödinger proposed in 1935 to illustrate the absurdity of quantum superposition when applied to macroscopic objects.",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["gardening", "sustainable living"],
      content:
        "My grandmother always said that the secret to beautiful roses lies in coffee grounds and eggshells. She would sprinkle them around the base of each bush every Sunday morning after breakfast.",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["cryptocurrency", "blockchain"],
      content:
        "pursuant to section 4.2.1 of the whitepaper, all transactions shall be verified through a distributed consensus mechanism utilizing proof-of-stake validation protocols as specified in appendix c",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["fitness", "weight loss", "health"],
      content:
        "ATTENTION!! 🔥🔥 Transform ur body in just 30 days with this ONE WEIRD TRICK doctors dont want u 2 know about!! Click here 4 more info!!!",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["Renaissance", "art history"],
      content:
        "Michelangelo di Lodovico Buonarroti Simoni (1475-1564) spent approximately four years painting the Sistine Chapel ceiling. The masterwork contains over 300 figures and covers roughly 12,000 square feet.",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["exploration"],
      content:
        "lmaooo imagine thinking the moon landing was real 😂😂 wake up sheeple the shadows dont even match up in those photos",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["poetry", "romanticism", "nature"],
      content:
        "I wandered lonely as a cloud / That floats on high o'er vales and hills, / When all at once I saw a crowd, / A host, of golden daffodils",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
  {
    value: {
      keywords: ["plumbing", "home repair", "DIY"],
      content:
        "Step 1: Turn off the main water supply. Step 2: Place a bucket beneath the P-trap. Step 3: Unscrew the slip nuts counterclockwise. Step 4: Remove debris and reassemble. WARNING: Do not overtighten fittings.",
    },
    compiledTasks: [
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
      {
        type: "scalar.function",
        skipped: false,
        mapped: null,
      },
    ],
    outputLength: null,
  },
];
