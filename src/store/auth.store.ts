import { delay } from '@helpers/delay';
import { BaseStore } from './base.store';

type User = {
  username?: string;
  password?: string;
};

type State = {
  isSigned: boolean;
  user: User | null;
  error: string | null;
  loading: boolean;
  hasError: boolean;
};

const initialState: State = {
  isSigned: false,
  user: null,
  error: null,
  hasError: false,
  loading: false,
};

const users: Required<User>[] = [
  {
    username: 'victorcrbt',
    password: '123456',
  },
  {
    username: 'admin',
    password: '123123',
  },
];

class Store extends BaseStore<State> {
  constructor() {
    super(initialState);
  }

  public handleSignIn = async ({ username, password }: Required<User>) => {
    try {
      const user = users.find(
        u =>
          u.username.toLowerCase() === username.toLowerCase() &&
          u.password === password
      );

      this.clearError();
      this.setState({ loading: true });

      await delay();

      if (!user) throw new Error('Invalid user credentials.');

      this.setState({
        isSigned: true,
        user: { username },
        error: null,
        hasError: false,
      });
    } catch (error: any) {
      this.setState({
        isSigned: false,
        user: null,
        error: error.message,
        loading: false,
        hasError: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  public handleSignOut = () => {
    this.setState({ isSigned: false, user: null });
  };

  public clearError = () => {
    this.setState({ error: null, hasError: false });
  };
}

export const AuthStore = new Store();
