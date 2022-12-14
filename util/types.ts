export type RelationType = "1-1" | "1-n" | "m-n";

export interface SchemaError {
  reason: string;
  row: string;
}

export interface EnumNodeData {
  name: string;
  dbName?: string | null;
  values: string[];
}

export interface ModelNodeData {
  name: string;
  dbName?: string | null;
  columns: Array<{
    name: string;
    type: string;
    kind: string;
    isList: boolean;
    isRequired: boolean;
    relationName?: string | null;
    relationFromFields?: string[] | null;
    relationToFields?: string[] | null;
    defaultValue?: string | null;
    relationType?: RelationType | null;
  }>;
}

export interface RelationEdgeData {
  relationType: RelationType;
}

export enum ErrorTypes {
  Prisma,
  Other,
}
