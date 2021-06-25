export type ModalProps = {
  isOpened: boolean;
  setIsOpen: () => void;
};

export interface PostProps {
  activeUserLikedIt: boolean;
  activeUserLovedIt: boolean;
  author: { id: number; username: string };
  content: string;
  createdAt: string;
  id: number;
  likes: number;
  loves: number;
  updatedAt: string;
}

export type ReactionProps = {
  like: boolean;
  love: boolean;
};

export interface AuthContextProps {
  signin: (values: UserInfo) => Promise<{ success: boolean; message?: any }>;
  signup: (values: UserInfo) => Promise<{ success: boolean; message?: any }>;
  logout: () => void;
  isAuthenticated: () => boolean;
  user: string | undefined;
}

export type UserInfo = {
    username: string;
    password: string;
  };
  

