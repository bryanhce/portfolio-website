interface HeaderButtonProps {
  text: string;
}

export default function HeaderButton({ text }: HeaderButtonProps) {
  return (
    <button
      className="px-6 py-2 border border-[#242424] rounded-full 
      border-none uppercase text-sm tracking-widest text-gray-300
      transition-all hover:border-[#8185E1] hover:text-[#E17FB3]"
    >
      {text}
    </button>
  );
}
