import api from "./api";

export interface Dragon {
  id?: string;
  name: string;
  type: string;
  createdAt?: string;
  imageUrl?: string;
}

export const DragonService = {
  getAll: async (): Promise<Dragon[]> => {
    const response = await api.get("/dragon", {
      params: {
        sortBy: "name",
      },
    });
    return response.data;
  },

  getById: async (id: string): Promise<Dragon> => {
    const response = await api.get(`/dragon/${id}`);
    return response.data;
  },

  create: async (dragon: Dragon): Promise<Dragon> => {
    const response = await api.post("/dragon", dragon);
    return response.data;
  },

  update: async (dragon: Dragon): Promise<Dragon> => {
    const response = await api.put(`/dragon/${dragon.id}`, dragon);
    return response.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/dragon/${id}`);
  },
};
