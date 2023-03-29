import React from "react";
import { useState, useEffect } from "react";
import Table from "../../pages/Table";
import ImportUI from "../import/import";
import DeleteUI from "../delete/delete";
import downarrow from "../images/downarrow.png"
import lineblack from "../images/lineblack.png"
import CSV from "../CSV";
import filter from "../images/filter.png"
import importlogo from "../images/importlogo.png"
import exportlogo from "../images/exportlogo.png"
import deletelogo from "../images/deletelogo.png"
import searchlogo from "../images/searchlogo.png"
import dashboard from "../images/dashboard.png"
import dashboardlogo from "../images/dashboardlogo.png"
import logout from "../images/logout.png";
export default function ContactPages() {
  const [data, setdata] = useState([]);
  const [query, setQuery] = useState("");
  //............pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(2);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    pages.push(i);
  }
  const indexOFLastItem = currentPage * itemPerPage;

  const renderPageNumber = pages.map((number) => {
    return (
      <li key={number} id={number}>
        {number}
      </li>
    );
  });
  ///..........................................Search
  const search = (data) => {
    console.log(data.filter((item) => item.email.includes(query.trim())));
    return data.filter((item) => item.email.includes(query.trim()));
  };
  ////......................................
  const headers = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Designation",
      key: "designation",
    },
    {
      label: "Company",
      key: "company",
    },
    {
      label: "Industry",
      key: "industry",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Phone number",
      key: "phone number",
    },
    {
      label: "Country",
      key: "country",
    },
  ];
  const csvLink = {
    filename: "file.csv",
    headers: headers,
    data: data,
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setdata(resp);
      });
    });
  }, []);
  console.log(data);
  
  const [importVisible, setImportVisible] = useState(false);
  const [renderOnce, setRenderOnce] = useState(false);

  const handleImportClick = () => {
    setImportVisible(!importVisible);
  };
  const [deleteVisible, setDeleteVisible] = useState(false);
  const handleDeleteClick = () => {
    setDeleteVisible(true);
    //setDeleteVisible(!deleteVisible);
  };
  return (
    <div>
      <div className="logo">
        <span className="text_logo">Logo</span>
        <div>
          <img class="dashlogo" src={dashboardlogo} alt="logo"/>  
          <p className="dashboard">Dashboard</p>
        </div>
        <div className="total_contacts">
        <img class="dlogo" src={dashboard} alt="logo"/>        
          <p className="text_tc">Total contacts</p>
        </div>
        <button className="logout">
        <img id="logout" src={logout} alt="logo"/> 
          <i class="fa fa-sign-out" aria-hidden="true">
            Log out
          </i>
        </button>
      </div>
      <div className="heading">
        <span className="contact_text">Total Contacts</span>
       <section>
       <input
          className="search"
          id="text"
          placeholder="Search by Email Id....."
          type="text"
            onChange={(e) => setQuery(e.target.value)}
        />
       <img class="searchlogo" src={searchlogo} alt="logo"/> 
        </section>
        <div className="pic">
        <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="admin" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        </div>
        <span className="user_name">name</span>
        <div className="post">Super Admin</div>
      </div>
      <div>
        <div>
          <input type="date" className="date" label="select date" />
          <span>
          <button className="filter">filter
          <img class="filterlogo" src={filter} alt="logo"/> 
          <img class="lineblack" src={lineblack} alt="logo"/> 
          <img class="downarrow" src={downarrow} alt="logo"/> 
            </button>
          </span>
          <span>
            <button className="delete" onClick={handleDeleteClick}>
            <img class="deletelogo" src={deletelogo} alt="logo"/> 
              <i class="fa fa-trash-o" aria-hidden="true"></i>delete
            </button>
            {deleteVisible && <DeleteUI deleteVisible={deleteVisible} setRenderOnce={setRenderOnce}
            setDeleteVisible={setDeleteVisible} />}
          </span>
          <span>
            {" "}
            <button className="import" onClick={handleImportClick}>
          <img class="importlogo" src={importlogo} alt="logo"/> 
              <i class="fa fa-download" aria-hidden="true"></i>
              import
            </button>
            {importVisible && (
        <ImportUI
          importVisible={importVisible}
          setImportVisible={setImportVisible}
          renderOnce={renderOnce}
          setRenderOnce={setRenderOnce}
        />
      )}
          </span>
          <span>
            {/* <CSV {...csvLink}> */}
              <button className="export">
              <img class="exportlogo" src={exportlogo} alt="logo"/> 
                <i class="fa fa-upload" aria-hidden="true"></i>export
              </button>
            {/* </CSV> */}
          </span>
          <Table data={search(data)} />
          <ul className="pageNumber">{renderPageNumber}</ul>
        </div>
      </div>
    </div>
  );
}
