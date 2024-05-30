import styleScope from "./index.module.scss";
const Progress=({value=10, maxVal=100})=>{
  return <progress className={styleScope["progress"]} value={value} max={maxVal}></progress>
}
export default Progress