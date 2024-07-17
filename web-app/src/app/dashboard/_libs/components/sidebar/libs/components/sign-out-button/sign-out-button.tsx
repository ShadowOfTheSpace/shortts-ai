import { Icon } from "~/_libs/components/components";

const SignOutButton: React.FC = () => {
  return (
    <button className="flex items-center gap-[10px] opacity-60 has-hover:hover:opacity-100 no-hover:active:opacity-100 px-[12px] py-[6px] transition-opacity">
      <Icon name="logOut" />
      Sign out
    </button>
  );
};

export { SignOutButton };
