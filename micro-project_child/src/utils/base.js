// 类名合并
export function mergeClassName(...arg){
  arg = arg.filter(Boolean)
  return arg.join(" ").trim()
}