import { defineStore } from 'pinia';
import type { BANNERS } from '~/types/banners.type';
import type { Blog } from '~/types/blogs.type';
import type { Partner } from '~/types/partners.type';
import type { USERS } from '~/types/users.type';
export const useDataStore = defineStore('dataStore', {
   state: () => ({
      data: null,
      users: {} as USERS | null,
      banners: <BANNERS[]>[],
      partners: <Partner[]>[],
      blogs: <Blog[]>[],
      past_presidents: [],
      teams: [],
      portfolio: [],
   }),
   actions: {},
});
