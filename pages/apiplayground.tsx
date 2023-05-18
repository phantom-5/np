import Link from "next/link"
import { useRef, useEffect, useState} from "react"
import { GetServerSidePropsContext } from 'next';
import { getDataFromFeedback } from './api/feedback';

type AppProps = {data:{name:string,rollno:string,time:string}[]}

const APIPlayground = (props:AppProps) => {

    const studentInfoName = useRef<HTMLInputElement>(null)
    const studentInfoRollNo = useRef<HTMLInputElement>(null)

    const [studentDetails,setStudentDetails] = useState<{name:string,rollno:number, time:string}[]>([])

    const getStudentDetails = async() => {
        let res = await fetch('/api/feedback',{
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        let responseJSON = await res.json()
        setStudentDetails(responseJSON.data)
    }

    const addStudentDetails = async() => {
        let name = studentInfoName.current?.value
        let rollno = studentInfoRollNo.current?.value
        let reqBody = {name,rollno}
        let res = await fetch('api/feedback',{
            method:'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type':'application/json'
            }
        })
        let responseJSON = await res.json()
        setStudentDetails(responseJSON.data)
    }

    useEffect(()=>{
        getStudentDetails()
    },[])

    return (
        <div className={'container text-center primary_cntr text-light'} style={{background:'rgba(125,125,0,0.6)'}}>
            <form className="form-inline" style={{borderRadius:'5px',background:'rgba(0,0,0,0.5)'}}>
                <div className="form-group mx-sm-3 mb-2">
                    <label className="sr-only">Name</label>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Name" ref={studentInfoName}/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label className="sr-only">Roll No.</label>
                    <input type="number" className="form-control" id="inputPassword2" placeholder="Roll Number" ref={studentInfoRollNo}/>
                </div>
                <button className="btn btn-primary mb-2" onClick={()=>{addStudentDetails()}}>Add</button>
            </form>
            <div className="mt-3">
                From Server: (client-side)
                <ul>
                    {studentDetails.map((item)=>{
                        return(
                            <li key={item.name}>{item.name} - {item.rollno} - {item.time}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="mt-3">
                From Server: (server-side)
                <ul>
                    {props.data.map((item)=>{
                        return(
                            <li key={item.name}>{item.name} - {item.rollno} - {item.time}</li>
                        )
                    })}
                </ul>
            </div>
            API Routes :
            <Link href={'/api/'} className="lead text-dark badge bg-light mt-1" style={{marginRight:'8px',textDecoration:'none'}}>/api/</Link>
            <Link href={'/api/feedback'} className="lead text-dark badge bg-light mt-1 mb-1" style={{marginRight:'8px',textDecoration:'none'}}>/api/feedback</Link>
            Dynamic Route Examples:
            <Link href={'/api/Ricky'} className="lead text-dark badge bg-light mt-1" style={{marginRight:'8px',textDecoration:'none'}}>/api/Ricky</Link>
            <Link href={'/api/1/2/3/4/5'} className="lead text-dark badge bg-light mt-1 mb-5" style={{marginRight:'8px',textDecoration:'none'}}>/api/1/2/3/4/5</Link>
            <span>This page also demo&apos;s how when page re-renders to state change, getServerSideProps is also triggered again. For More on API Check Evernote. In Code Check - pages/api/</span>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext){
    let data = getDataFromFeedback()
    return {
        props: {data}
    }
}

export default APIPlayground