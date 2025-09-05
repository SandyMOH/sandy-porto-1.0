import JakartaTime from './components/JakartaTime';
import Sandy from './components/Sandy';
import Menu from './components/Menu';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-3 md:items-center md:text-lg">
        <JakartaTime />
        <Sandy />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
