function SyntaxHighlaughter({ content }: { content: string }) {
  const words = content.split(" ");
  return (
    <>
      {words.map((word) => {
        if (word.includes("import") || word.includes("return")) {
          return <span className="text-[#c586c0]">{`${word} `}</span>;
        } else if (word.includes("interface") || word.includes("function")) {
          return <span className="text-[#2d7ad6]">{`${word} `}</span>;
        } else {
          return <>{`${word} `}</>;
        }
      })}
    </>
  );
}
export default SyntaxHighlaughter;
