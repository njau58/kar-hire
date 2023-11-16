interface BadgeProps {
  variant: "Sale" | "Hire";
}

const Badge = ({ variant }: BadgeProps) => {
  return variant === "Sale" ? (
    <div className=" w-16 rounded-md h-6 text-center bg-black text-white text-sm">
      {variant}
    </div>
  ) : (
    <div className=" w-16 rounded-md h-6 text-center bg-primary text-sm text-white">
      {variant}
    </div>
  );
};

export default Badge;
