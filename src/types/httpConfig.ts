export interface httpConfigType {
  method: "get" | "post" | "put" | "delete";
  url: string;
  data?: any;
}
