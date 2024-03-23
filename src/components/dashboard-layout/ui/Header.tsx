import { GlobalLoader } from '../../GlobalLoader';
import { Profile } from './Profile';

export function Header() {
  return (
    <header>
      <GlobalLoader />
      <Profile />
    </header>
  );
}
