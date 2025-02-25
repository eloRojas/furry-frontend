type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <article className="bg-white shadow-sm border border-[#C6C6C6] rounded">
      {children}
    </article>
  );
}
