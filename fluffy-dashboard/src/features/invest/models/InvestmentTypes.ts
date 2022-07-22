export const InvestmentTypes = {
  Actiuni: "BRD Actiuni Clasa A",
  Diverso: "BRD Diverso Clasa A",
  Simfonia: "BRD Simfonia",
  Simplu: "BRD Simplu",
} as const;

export type InvestmentKeys = keyof typeof InvestmentTypes;

type InvestmentStorageKeysType = {
  [key in InvestmentKeys]: string;
};

export const InvestmentStorageKeys: InvestmentStorageKeysType = {
  Actiuni: "d485fc86-8fe2-4180-9a34-0792f225cbf2",
  Diverso: "66549ba0-9b77-439a-886e-c3753beb3b0b",
  Simfonia: "c1547b42-d01b-4f2a-a283-9c41b5b0cbf6",
  Simplu: "b8eb0b30-3c90-4b86-b569-09512020929b",
} as const;
