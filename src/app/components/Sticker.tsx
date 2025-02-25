type CardProps = {
  children: React.ReactNode;
};

export default function Sticker({ children }: CardProps) {
  return (
    <div className="bg-[#FFB8EF] border border-[#E7AADA] px-[1rem] py-[0.5rem] text-[#773E75] font-bold w-fit">
      {children}
    </div>
  );
}
