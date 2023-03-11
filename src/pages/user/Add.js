import React, { useState } from "react";
import api from "../../api/axios";

const Add = () => {
  const [inputs, setInputs] = useState({});
  const [errmessage, setErrmassage] = useState({});
  const handleChangeInputs = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    setErrmassage((prevState) => ({
      ...prevState,
      [event.target.name]: "",
    }));
  };
  let formData = new FormData();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    formData.append("avatar", file);
  };
  const createUserApi = async () => {
    const res = await api.post("users/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res) {
      console.log(res);
    }
  };

  const handleForomSubmint = () => {
    console.log(inputs);
    formData.append("email", inputs.email);
    formData.append("position", inputs.position);
    formData.append("gender", inputs.gender);
    formData.append("fullName", inputs.fullName);
    console.log(formData);

    // alert("je");
    // createUserApi();
  };

  return (
    <div>
      <>
        {/* component */}
        <div className=" p-6 bg-gray-100 flex  justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Users Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          onChange={handleChangeInputs}
                          type="text"
                          name="fullName"
                          id="fullname"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          onChange={handleChangeInputs}
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="address">Positions</label>
                        <div className="relative mt-1 h-10 w-72 min-w-[200px]">
                          <select
                            onChange={handleChangeInputs}
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          >
                            <option value="brazil">Brazil</option>
                            <option value="bucharest">Bucharest</option>
                            <option value="london">London</option>
                            <option value="washington">Washington</option>
                          </select>
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Select a Role
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="city">Address</label>
                        <input
                          onChange={handleChangeInputs}
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-6">
                        <div className="main flex border  overflow-hidden mt-2 select-none">
                          <div
                            style={{ color: "white" }}
                            className="title py-3 my-auto px-5 bg-blue-600  text-sm font-semibold mr-3"
                          >
                            Gender
                          </div>
                          <label className="flex radio p-2 cursor-pointer">
                            <input
                              className="my-auto transform scale-125"
                              type="radio"
                              name="gender"
                              value="male"
                              onChange={handleChangeInputs}
                            />
                            <div className="title px-2 font-bold mt-1">
                              male
                            </div>
                          </label>
                          <label className="flex radio p-2 cursor-pointer">
                            <input
                              className="my-auto transform scale-125"
                              type="radio"
                              name="gender"
                              value="female"
                              onChange={handleChangeInputs}
                            />
                            <div className="title px-2 font-bold mt-1">
                              female
                            </div>
                          </label>
                          <label className="flex radio p-2 cursor-pointer">
                            <input
                              className="my-auto transform scale-125"
                              type="radio"
                              name="gender"
                              value="gay"
                              onChange={handleChangeInputs}
                            />
                            <div className="title px-2 font-bold mt-1">gay</div>
                          </label>
                          <label className="flex radio p-2 cursor-pointer">
                            <input
                              className="my-auto transform scale-125"
                              type="radio"
                              name="gender"
                              value="lesbian"
                              onChange={handleChangeInputs}
                            />
                            <div className="title px-2 font-bold mt-1">
                              lesbian
                            </div>
                          </label>
                        </div>
                      </div>
                      {/* component */}
                      <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                        <div
                          className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
                          style={{ width: 450 }}
                        >
                          <svg
                            className="text-indigo-500 w-24 mx-auto mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <div className="input_field flex flex-col w-max mx-auto text-center">
                            <label>
                              <input
                                className="text-sm cursor-pointer w-36 hidden"
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                              />
                              <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                                Select
                              </div>
                            </label>
                            <div className="title text-indigo-500 uppercase">
                              or drop your Profile image here
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          onClick={() => {
                            handleForomSubmint();
                          }}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Add;
