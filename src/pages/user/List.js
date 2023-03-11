import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div>
      <>
        {/* component */}
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <div className="flex justify-end">
          <div>
            <Link to="/user/add">
              <button
                type="button"
                class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </Link>
          </div>
        </div>

        <table className="table w-full text-gray-400 border-separate  text-md">
          <thead className="bg-gray-800" style={{ color: "white" }}>
            <tr>
              <th className="p-3">Avatar</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-300" style={{ color: "black" }}>
              <td className="p-3">
                <div className="flex align-items-center">
                  <img
                    className="rounded-full h-12 w-12  object-cover"
                    src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                    alt="unsplash image"
                  />
                  <div className="ml-3">
                    <div className="">Appple</div>
                    <div className="text-black">mail@rgmail.com</div>
                  </div>
                </div>
              </td>
              <td className="p-3">Technology</td>
              <td className="p-3 font-bold">200.00$</td>
              <td className="p-3">
                <span className="bg-green-400 text-gray-50 rounded-md px-2">
                  available
                </span>
              </td>
              <td className="p-3 ">
                <a href="#" className="text-gray-700 hover:text-gray-900 mr-2">
                  <i className="material-icons-outlined text-base">
                    visibility
                  </i>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900  mx-2">
                  <i className="material-icons-outlined text-base">edit</i>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900  ml-2">
                  <i className="material-icons-round text-base">
                    delete_outline
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.table {\n\t\tborder-spacing: 0 15px;\n\t}\n\n\ti {\n\t\tfont-size: 1rem !important;\n\t}\n\n\t.table tr {\n\t\tborder-radius: 20px;\n\t}\n\n\ttr td:nth-child(n+5),\n\ttr th:nth-child(n+5) {\n\t\tborder-radius: 0 .625rem .625rem 0;\n\t}\n\n\ttr td:nth-child(1),\n\ttr th:nth-child(1) {\n\t\tborder-radius: .625rem 0 0 .625rem;\n\t}\n",
          }}
        />
      </>
    </div>
  );
};

export default List;
