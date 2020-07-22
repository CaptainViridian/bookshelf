import { Categories } from './constants';

export const editBookPath = (id) => `/edit-book/${id}`;

export const newBookPath = () => '/new-book/';

export const showBookPath = (id) => `/show-book/${id}`;

export const categoryPath = (name) => (name === Categories.noCategory ? undefined : `/category/${name}`);
