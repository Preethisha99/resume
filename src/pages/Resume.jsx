import MainProfile from "../assets/blank-profile.png";
import Phone from "../assets/mobile5A5B5A.png";
import Mail from "../assets/mail5A5B5A.png";
import Github from "../assets/icons8-github-64.png";
import Location from "../assets/location5A5B5A.png";
import LinkedIn from "../assets/in5A5B5A.png";

import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const ResumeModel = () => {

  const [item, setItem] = useState([
    {
      id: 1,
      pic:"../assets/doctor.png",
      projectName: "Project",
      eShop: 'React JS , BootStrap, JavaScript , CSS.',
      features: 'Search the product , check the Product details and add the product to the cart.',
    },
    {
      id: 2,
      obj: "I'm MERN Full-Stack Developer , interpersonal skills and team player. Currently looking for new opportunities in reputed organisation and i ca make my level best in technology."
    },
    {
      id: 3,
      proName: " ATS (Application Tracking Software)",
      proDesc: " An ATS helps companies organize candidate for hiring and recruitment purpose",
      proPeriod: "2 Month",
      teamSize: "2F, 3M ",
      Tech: "Mern"
    },
    {
      id: 4,
      Degree: "MASTER DEGREE",
      Branch: "2020-2022 M.Sc Kamaraj University , Madurai",
      CgPa: "79.53 CGPA"
    },
    {
      id: 5,
      firstList: "Full Stack Development (MERN) Be Practical Tech Solution - Bangalore.",
      secondList: "MS Office & DCA Completed English Typing in Lower Universe Tech Solutions- Kovilpatti"
    }
  ]);
  
  const [isEdit, setIsEdit] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const handleEdit = (id) => {
    setIsEdit(true);
    setEditedItem(id);
  };

  const handleDelete = (id) => {
    const updatedItems = item.filter((item) => item.id !== id);
    setItem(updatedItems);
  };

  const handleChange = (e, id, key) => {
    const updatedItems = item.map((i) => {
      if (item.id === id) {
        return { ...item, [key]: e.target.value };
      }
      return item;
    });
    setItem(updatedItems);
  };

  const handleSave = async (e) => {
  console.log("Data");
    e.preventDefault(); 
    try {
      await axios.post("/api/resume/book", item);
      // toast.success("Successfully");
    } catch (error) {
      console.log("Error in submitting");
    }
  };

  return (
    <>
    <form onSubmit={handleSave}>
    {/* <button type="submit">Submit</button> */}
      <div className="pt-4">
        <div className="container">
          <div className="mb-1">
            <div className="row text-bg-dark">
              {/* image upload  */}
              <div className="col">
                <div className="p-4">
                  <img
                    src={MainProfile}
                    alt=""
                    className="border border-black rounded-circle img-fluid custom-img"
                  />
                </div>
              </div>
              {/* name with description */}
              <div className="col-8">
                <div className=" mt-5 letter-spacing text-uppercase">
                  <h1 className="fw-bolder">preethisha</h1>
                  <h6 className="fw-lighter">Mern fullstack developer</h6>
                </div>
              </div>
            </div>
            <hr/>

            <div className="row">
              <div className="col-4">
                <div className="row">
                  {/* phone img icon  */}
                  <div className="col-3">
                    <img
                      src={Phone}
                      alt=""
                      className=" rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <p className="fst-italic">
                      +
                      <span className="fw-bolder letter-spacing">
                        {" "}
                        9488300654 <FaEdit size={10} />
                      </span>
                      <br />+{" "}
                      <span className="fw-bolder letter-spacing">
                        {" "}
                        8300186102 <FaEdit size={10} />
                      </span>
                    </p>
                  </div>
                </div>
                {/* Email  */}
                <div className="row">
                  {/* email png icon  */}
                  <div className="col-3">
                    <img
                      src={Mail}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <a href="" className="text-decoration-none">
                      prempreethi923@gmail.com{" "}
                    </a>{" "}
                    <FaEdit size={10} />
                  </div>
                </div>
                {/* GIT  */}
                <div className="row">
                  {/* git png icon  */}
                  <div className="col-3">
                    <img
                      src={Github}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <a href="" className="fst-italic text-decoration-none">
                      https://github.com/Preethisha99{" "}
                    </a>{" "}
                    <FaEdit size={10} />
                  </div>
                </div>
                {/* addresses  */}
                <div className="row">
                  <div className="col-3">
                    <img
                      src={Location}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <p className="text-capitalize">
                      a576/5 , shunmuga sigamani nagar , MK road Thiruverkadu chennai
                      - 628502.
                      <span>
                        <FaEdit size={10} />
                      </span>
                    </p>
                  </div>
                </div>
                {/* linkedIn  */}
                <div className="row">
                  <div className="col-3">
                    <img
                      src={LinkedIn}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <href className="text-decoration-none fw-medium text-nowrap">
                      https://www.linkedin.com/in <br />
                      /preethisha99
                    </href>
                    <span>
                      <FaEdit size={10} />
                    </span>
                  </div>
                </div>
                <div className="row">
                  <h3 className="text-uppercase">
                    technical skills{" "}
                    <span>
                      <FaEdit size={10} />
                    </span>{" "}
                  </h3>

                  <ul>
                    <li>React JS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSs</li>
                    <li>MUI</li>
                    <li>
                      <span className="fw-bolder text-uppercase">html</span>
                    </li>
                    <li>
                      <span className="fw-bolder text-uppercase">css</span>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <h3 className="text-uppercase">
                    language known{" "}
                    <span>
                      <FaEdit size={10} />
                    </span>
                  </h3>
                  <ul>
                    <li>English</li>
                    <li>Tamil</li>
                    <li>
                      Hindi{" "}
                      <span className="text-uppercase fw-bolder">(r, w)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-8">
                {/* Objective  */}
                <div className="row">
                  <h3 className="text-uppercase">
                    objective
                      {/* Edit, Save, and Delete buttons */} 
                     
                      {item.id === editedItem && isEdit ? 
                
                      (
                        <span>
                  <FaSave onClick={handleSave} size={10} color="green" cursor="Pointer"/>
                  <FaTrash onClick={handleDelete} size={10} color="crimson" cursor="Pointer"/>
                     </span> ) : (
                        <FaEdit onClick={handleEdit} size={10} cursor="Pointer" color="black"  />
                    )}
                    
                    
                      </h3>
                      
                  <p>
                   {item[1].obj}
                  </p>
                </div>
                {/* Project  */}
                <div className="row">
                  <h3 className="text-uppercase">
                  project
                  <span><FaEdit onClick={handleEdit} size={10} cursor="Pointer" color="black"  /> 
                           <FaSave onClick={handleSave} size={10} color="green" cursor="Pointer"/>
                            <FaTrash onClick={handleDelete} size={10} color="crimson" cursor="Pointer"/></span>
                  </h3>
                   <p>
                    <span className="fw-bolder">E-Shop:</span> 
                    {item[0].eShop}
                  </p> 
                  <p>
                    <span className="fw-bolder">Features: </span>{item[0].features}
                  </p>
                </div>
                {/* InternShip  */}
                <div className="row">
                  <h3 className="text-uppercase">
                    internship   
                    <span><FaEdit onClick={handleEdit} size={10} cursor="Pointer" color="black"  /> 
                           <FaSave onClick={handleSave} size={10} color="green" cursor="Pointer"/>
                            <FaTrash onClick={handleDelete} size={10} color="crimson" cursor="Pointer"/></span>
                  </h3>
                   <p>
                    <span className="fw-bolder">Project Name: </span>{" "}
                    <span className="fst-italic"></span> {item[2].proName}
                  </p> 
                  <p>
                    <span className="fw-bolder">Project Description: </span> An{" "}
                    <span className="fst-italic">ATS</span> helps companies
                    organize candidate for hiring and recruitment purpose
                  </p>
                  <p>
                    <span className="fw-bolder">Project Period: </span> 2 Month
                  </p>
                  <p>
                    <span className="fw-bolder">Team Size: </span> 2F, 3M
                  </p>
                  <p>
                    <span className="fw-bolder">Technology & Tools: </span> MERN
                  </p>
                </div>
                {/* education  */}
                <div className="row">
                  <h2 className="text-uppercase">
                    education <FaEdit size={10} />
                  </h2>
                  <div className="col-4">
                    <h6 className="fw-bolder text-uppercase">master degree</h6>
                  </div>
                  <div className="col-4">
                    <p className="fw-bolder">
                      2020-2022{" "}
                      <span className="fw-bolder text-uppercase">m.s</span>c{" "}
                      <span className="text-capitalize">
                        kamaraj university , madurai
                      </span>
                    </p>
                  </div>
                  <div className="col-4">
                    <p>
                      {" "}
                      79.53
                      <span className="text-uppercase fw-bolder">cgpa</span>
                    </p>
                  </div>
                </div>
                {/* certifications  */}
                <div className="row">
                  <h3 className="text-uppercase">
                    {" "}
                    certifications <FaEdit size={10} />
                  </h3>
                  <ul>
                    <li>
                      Full Stack Development (MERN)
                      <br /> Be Practical Tech Solution - Bangalore
                    </li>

                    <li>
                      MS Office & DCA <br /> Completed English Typing in Lower
                      Universe Tech Solutions- Kovilpatti
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        
        </div>
      </div>
      </form>
    </>
  )
                                  };

export default ResumeModel;
