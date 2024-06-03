export type Activites = {
  content: string;
  created_at: string;
  id: number;
  medias: { id: number, original_url: string, activite_id: number }[];
  title: string;
  updated_at: string;
  user_id: string;
};
