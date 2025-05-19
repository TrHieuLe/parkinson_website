import { useEffect } from "react"
import { classify } from "../analysis_question"

// export default function Result({ type, scores }) {
//   const typeResult = classify(type, scores)
//   console.log(typeResult)
//   const result = (() => {
//     if (type == 'dass21')
//       return (<>
//         <tr>
//           <td className="p-3 border">Trầm cảm </td>
//           <td className="p-3 border">{ scores.depression }</td>
//           <td className="p-3 border">{ typeResult.depression.text }</td>
//         </tr>
//         <tr>
//           <td className="p-3 border">Lo lắng </td>
//           <td className="p-3 border">{ scores.anxiety }</td>
//           <td className="p-3 border">{ typeResult.anxiety.text }</td>
//         </tr>
//         <tr>
//           <td className="p-3 border">Stress </td>
//           <td className="p-3 border">{ scores.stress }</td>
//           <td className="p-3 border">{ typeResult.stress.text }</td>
//         </tr>

//       </>)
//   })()

//   return (
//     <>
//       <table className="border border-collapse">
//         <thead>
//           <tr>
//             <th className="p-3 border">Loại</th>
//             <th className="p-3 border">Điểm</th>
//             <th className="p-3 border">Tình trạng</th>
//           </tr>
//         </thead>
//         <tbody>
//           { result }
//         </tbody>
//       </table>
//       <strong className="mt-5">Cách tính điểm: </strong>
//       <p>
//       21 câu hỏi được chia thành 3 nhóm, mỗi nhóm có 7 câu hỏi:
//       <ul className="list-disc pl-4">
//         <li>Trầm cảm (Depression): Câu 3, 5, 10, 13, 16, 17, 21.</li>
//         <li>Lo âu (Anxiety): Câu 2, 4, 7, 9, 15, 19, 20.</li>
//         <li>Căng thẳng (Stress): Câu 1, 6, 8, 11, 12, 14, 18.</li>
//       </ul>
//         Cộng điểm các câu trong từng nhóm để có điểm thô của từng yếu tố (trầm cảm, lo âu, căng thẳng).
//         Vì DASS-21 là phiên bản rút gọn từ DASS-42, điểm thô của mỗi yếu tố cần nhân với 2 để quy đổi tương ứng với thang đo gốc.
//       </p>
//       <table className="mt-5 border">
//         <thead>
//           <th>Mức độ</th>
//           <th>Trầm cảm</th>
//           <th>Lo âu</th>
//           <th>Căng thẳng</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Bình thường	</td>
//             <td>0 - 9</td>	
//             <td>0 - 7</td>	
//             <td>0 - 14</td>
//           </tr>
//           <tr>
//             <td>Nhẹ </td>
//             <td>10 - 13</td>	
//             <td>8 - 9</td>	
//             <td>15 - 18</td>
//           </tr>
//           <tr>
//             <td>Trung bình</td>
//             <td>14 - 20</td>	
//             <td>10 - 14</td>	
//             <td>19 - 25</td>
//           </tr>
//           <tr>
//             <td>Nặng</td>
//             <td>21 - 27</td>	
//             <td>15 - 19</td>	
//             <td>26 - 33</td>
//           </tr>
//           <tr>
//             <td>Rất nặng</td>
//             <td>&ge; 28</td>	
//             <td>&ge; 20</td>	
//             <td>&ge; 30</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
// )}

export default function Result({ type, scores }) {
  const typeResult = classify(type, scores)

  const result = (() => {
    if (type == 'dass21')
      return (<>
        <tr>
          <td className="p-3 border">Trầm cảm </td>
          <td className="p-3 border">{ scores.depression }</td>
          <td className="p-3 border">{ typeResult.depression.text }</td>
        </tr>
        <tr>
          <td className="p-3 border">Lo lắng </td>
          <td className="p-3 border">{ scores.anxiety }</td>
          <td className="p-3 border">{ typeResult.anxiety.text }</td>
        </tr>
        <tr>
          <td className="p-3 border">Stress </td>
          <td className="p-3 border">{ scores.stress }</td>
          <td className="p-3 border">{ typeResult.stress.text }</td>
        </tr>

      </>)
    else if (type == 'parkinson')
      return (
        <>
          <tr>
            <td className="p-3 border">Điểm</td>
            <td className="p-3 border">{ scores.parkinson }</td>
            <td className="p-3 border">{ typeResult.parkinson.text }</td>
          </tr>
        </>
      )
  })()

  return (
    <>
      <table className="border border-collapse">
        <thead>
          <tr>
            <th className="p-3 border">Loại</th>
            <th className="p-3 border">Điểm</th>
            <th className="p-3 border">Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          { result }
        </tbody>
      </table>

    </>
)}