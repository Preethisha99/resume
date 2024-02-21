import React, { Fragment } from "react";
import {Button , Table} from "react-bootstrap"
import Employee from "../Employee";
import { useNavigate } from "react-router-dom";

function Home(){
    let history = useNavigate()

    const  handleDelete = (id)=> {
        let index = Employee.map((e)=>{
            return e.id
        }).indexOf(id);
        
        // array.splice(start, deleteCount, item1, item2, ...) 
        Employee.splice(index, 1);

        history('/home')
    }
    function handleEdit(){

    }
    return(
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover  size= "sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           ( Employee && Employee.length > 0 )
                            ?(
                            Employee.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                        {item.name}
                                        </td>
                                        <td>
                                            {item.desc}
                                        </td>
                                        <td>
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                            &nbsp; 
                                            <Button onClick={() => handleEdit(item.id)}>EDIT</Button>
                                        </td>
                                    </tr>
                                )
                            }) 
                             ) : 
                            ("No data Available")
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}
export default Home