const AuthDivider: React.FC = () => {
  return (
    <div className="flex items-center gap-[10px] py-[10px] w-full">
      <span className="bg-primary h-[1px] grow" />
      <span className="text-primary">OR</span>
      <span className="bg-primary h-[1px] grow" />
    </div>
  );
};

export { AuthDivider };
