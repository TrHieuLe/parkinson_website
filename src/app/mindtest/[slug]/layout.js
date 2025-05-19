import Test from "./page"
import typeQuestionData from "@/pages/api/tools/tests.json"


export default async function TestLayout({ children, params, repo }) {
  const slug = (await params).slug
  const typeQuestion = typeQuestionData[slug]

  return (
    <div className="flex flex-col p-res items-center justify-center w-full mb-24 mt-36">
      <div className="question border mb-9">
        <Test type={ slug } typeQuestion={ typeQuestion } />
      </div>
    </div>
  )
}