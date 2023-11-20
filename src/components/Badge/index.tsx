interface BadgeProps {
  variant: "Sale" | "Hire" | undefined;
}

const Badge = ({ variant }: BadgeProps) => {
  return variant === "Sale" ? (
    <div className=" w-16  h-6 text-center bg-black text-white text-sm">
      {variant}
    </div>
  ) : (
    <div className=" w-16  h-6 text-center bg-primary text-sm text-white">
      {variant}
    </div>
  );
};

export default Badge;
