export interface todoCore {
  title: string;
  content: string;
}

export interface todoItemDto extends todoCore {
  id: string;
  createdAt: string;
  updatedAt: string;
}
