import { CARD } from '../types';
import styles from '../../styles/Card.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';

type AppProps = {cardProps: CARD}

export default function Card(props:AppProps){
    const cardProps = props.cardProps
    return(
    <div className={'container text-center'}>
      <div className={styles.card_container}>
      <h1 className='lead'>{cardProps.title}</h1>
      <table className='table table-bordered'>
        <tbody>
        <tr>
          <td><span className="badge bg-warning mt-1 mb-1 text-dark">In Code</span></td>
          <td><span className={'lead '+styles.route_field}>{cardProps.inCode}</span></td>
        </tr>
        <tr>
          <td><span className="badge bg-info mt-1 mb-1 text-dark">In Web</span></td>
          <td><span className={'lead '+styles.route_field}>{cardProps.inWeb}</span></td>
        </tr>
        </tbody>
      </table>
      <span className='fw-lighter'>{cardProps.desc}</span>
      </div>
      <br/>
      {cardProps.rts && 
        <div>
          {cardProps.rts.map((item)=>(<Link href={item.href} className="lead text-dark badge bg-light" style={{marginRight:'8px',textDecoration:'none'}} key={item.label} >{item.label}</Link>))}
        </div>
        
      }
    </div>
    )
}