import {FaTrash} from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import { FaFilePdf } from "react-icons/fa6";


const TableRow = ({ student }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={student?.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold  capitalize" >{student?.nameEnglish}</div>
            <div className="text-sm opacity-50">{student?.nameBangla}</div>
          </div>
        </div>
      </td>
      <td>
        {student?.transactionID}
        <br />
        {student?.paymentStatus ? (
          <span className="badge badge-success badge-sm">success</span>
        ) : (
          <span className="badge badge-error badge-sm">failed</span>
        )}
      </td>
      <td>{student?.course?.name}</td>
      <td>{student?.phone}</td>
      <td>{student?.village}</td>
      <th className="flex flex-row items-center justify-end   gap-2">
        <td className="">
          <button className="text-error text-2xl cursor-pointer">
            <FaTrash />
          </button>
        </td>
        <td className="">
          <button className="text-success text-2xl cursor-pointer">
            <MdEdit />
          </button>
        </td>
        <td className="">
          <button className="text-success text-2xl cursor-pointer">
            <FaFilePdf />
          </button>
        </td>
      </th>
      {/* <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th> */}
    </tr>
  );
};
export default TableRow;
