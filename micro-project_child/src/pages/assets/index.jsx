import Card from "../../components/Card"
import Progress from "../../components/Progress"

const AssetsModule = ()=>{
  return <main>
    <Card>
      <p>俱乐部</p>
      </Card>
      <Card className="flex">
        <div>ozc资产</div>
        <Progress/>
          <div>TOTO资产</div>
      </Card>
  </main>
}
export default AssetsModule