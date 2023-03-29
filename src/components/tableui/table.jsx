import React from 'react'
import { useState , useEffect} from 'react'
import close from './close.png';
import './table.css'
import side from './side.svg'
import logout from './logout.svg'
import topbar from './topbar.svg'
import filter from './filter.svg'
import searchIcon from './search.svg'
import deleteBtn from './deleteBtn.svg'
import importBtn from './importBtn.svg'
import exportBtn from './exportBtn.svg'
import userImage from './user.svg'
import  DeleteUI from '../delete/delete'
import ImportUI from '../import/import'
import { isAuthenticated } from '../../helper/helper'
import { HandleLogout } from '../../helper/helper'

function Table() {

  const [enteredText,setEnteredText]=useState('')
  const [deleteVisible,setDltvisible]=useState(false);
  const [importVisible,setImportvisible]=useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const headings = ['Name', 'Designation', 'Company', 'Industry', 'Email', ' Phone number', 'Country', 'Action'];
  const [rendertable,setRenderTable]=useState(false);

  const [renderOnce, setRenderOnce] = useState(false);
  const [isAllchecked,setAllchecked]=useState(false);
  const url=process.env.REACT_APP_API;



  const token = isAuthenticated();
  useEffect(() => {
    setLoading(true);
    fetch(`${url}/contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        authorization: `${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        let contacts=res.data.map((item) => ({ ...item, isChecked: false }));
        
        setData(contacts);
        setAllchecked(false);

        if(res.data.length!=0){
          setRenderTable(true);
        }
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [renderOnce]);
  
  const deleteClick=()=>{
    setDltvisible(!deleteVisible)
  }
  const importClick=()=>{
    setImportvisible(!importVisible)
  }

 
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setEnteredText(searchWord);
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.email.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setRenderOnce(!renderOnce)
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const cancelDropDown=()=>{
    setFilteredData([]);
    setWordEntered("");
  }
  //console.log(data.length);

  const handleAllcheck=async (e)=>{
    setAllchecked(!isAllchecked);
    
    let newContacts=await data.map((obj)=> 
      ({...obj, isChecked:e.target.checked})
   );
 setData(newContacts);
  }




  const changeChecked=async (contact)=>{
    //console.log(data,"hi");
    let newContacts=await data.map((obj)=>{ if (obj._id === contact._id) {
      return {...obj, isChecked: !contact.isChecked};
    }
    return obj;
   });
 setData(newContacts);
  }


  const individualDlt=async (contact)=>{
    
    let newContacts=await data.map((obj)=>{ if (obj._id === contact._id) {
      return {...obj, isChecked: true};
    }
    return obj;
   });
   setData(newContacts);

   setDltvisible(true)

  }

  const clearBtn=()=>{
    if(enteredText===''){
      setEnteredText('')
    }else{
    setRenderOnce(!renderOnce)
    setEnteredText('')
    }
  }

  const searchEvent=(val)=>{
    
    let search=val.target.innerText;
    console.log(search);
    setEnteredText(search);
    const newFilter = data.filter((value) => {
      return value.email.toLowerCase().includes(search.toLowerCase());
    });
    if(newFilter.length===0){
      setRenderOnce(!renderOnce)
    }
    setData(newFilter)

  }

  return (
<>

    {
      deleteVisible && 
      <div>< DeleteUI  data={data} setData={setData} setRenderOnce={setRenderOnce} renderOnce={renderOnce} setDltvisible={setDltvisible} deleteVisible={deleteVisible}></DeleteUI></div>
    }
    {
      importVisible && 
      <div>
    <ImportUI setRenderOnce={setRenderOnce} renderOnce={renderOnce} setImportvisible={setImportvisible} importVisible={importVisible}></ImportUI>
      </div>
    }
    <div className='parent'>




    <div className='container1'>
        <div ><img src={side} id='logo'  alt='icon'></img></div>
        
        {/*Logout button click logic need to be implemented here */}
        
        <div className='logout'>
            <img src={logout}  alt='icon' onClick={HandleLogout}></img>
            </div>
    </div>
<div className='leftcontainer'>
    <div className='userBar'>
      <div className='mainIcon'>
        <img src={topbar}></img>
      </div>
      <div className='searchBar'>
        <div className='searchDrop'>
        <img src={searchIcon} alt='search icon'></img>

        <input type={"text"} value={enteredText} className='input-area' placeholder='Search by Email id...' onChange={handleFilter} onBlur={cancelDropDown}></input> 
        
        <img src={close} alt='close icon' id='closeIcon' onClick={clearBtn}></img>
      </div>
      
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="dataItem"  onMouseEnter={searchEvent}>
                {value.email}
              </div>
            );
          })}
          
        </div>
      )}
      
      </div>

<div className='userDetails'>

<div className='userImage'>
    <img src={userImage} alt='user icon'></img>
  </div>
<div className='userName'>

  <h5>{localStorage.getItem('user').split('@')[0]}</h5>

  
  <p>user</p></div>
      </div>
    </div>

    <div className='filter'>
    <img src={filter} className='filterimgstick' alt='icon'></img>
    {/* {Individual buttons} */}
    <div className='individualBtndiv'>
    <img src={deleteBtn} className='filterimg' alt='icon' onClick={deleteClick}></img>
    <img src={importBtn} className='filterimg' alt='icon' onClick={importClick}></img>
    <img src={exportBtn} className='filterimg' alt='icon'></img>
    </div>

    </div>
    
    {/* Write in this div the table view code */}
    <div className="Overflow">
          {
            loading ? (
              <div className="loadingContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"></img>
              </div>
            )  : (

          <table>
            <thead>
              <tr className='headings'>
                {
                  headings.map((heading, index) => {
                    return (
                     
                      heading === "Name" ? (
                       <td className='tableTd'>
                        <div className="allCheck">
                         <input type="checkbox" checked={isAllchecked} onChange={(e)=>handleAllcheck(e)}/>
                        <p className="nname">{heading}</p>
                        </div>
                       </td>
                      ) : (
                        <td>
                          {heading}
                        </td>
                      )
                     
                    )
                  })
                }
              </tr>
            </thead>
            { rendertable &&
            <tbody >
            
                {
                  data.map((contact, index) => {
                    return (
                      <tr className={`${index % 2 === 0 ? "odd" : "even"}`}>
                        <td >
                          <div className='nameContainer'>
                            <input type="checkbox" checked={contact.isChecked} onChange={(e)=>{changeChecked(contact)}}/>
                            <p title={contact.name} className="name1">{contact.name}</p>
                          </div>
                        </td>
                        <td title={contact.designation}>{contact.designation}</td>
                        <td title={contact.company}>{contact.company}</td>
                        <td title={contact.industry}>{contact.industry}</td>
                        <td><div class="tooltip">
  <a href={`mailto:${contact.email}`} target='_blank'>{contact.email}
    <span class="tooltip-text">{contact.email}</span>
  </a>
</div>
                          
                          </td>
                        <td title={contact.phone}>{contact.phone}</td>
                        <td title={contact.country}>{contact.country}</td>
                        <td>
                          <div className='buttonContainer1'>
                            {/* <button className='editbutton'>Edit</button> */}
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>


                            {/* <button className='deletebutton'>Delete</button> */}
                            <svg onClick={(e)=>individualDlt(contact)} className="deleteIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                          </div>
                        </td>
              </tr>
                    )
                  })
                }
             
            </tbody>
          }
          </table>
            )
          }

        </div>

    </div>


    </div>
    </>
  )
}

export default Table
