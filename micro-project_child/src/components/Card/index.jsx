import { mergeClassName } from "@/utils/base";
const Card = ({ className = "", style = {}, children }) => {
  return (
    <main className={mergeClassName("rounded-[6px]", className)} style={style}>
      {children}
    </main>
  );
};
export default Card;
