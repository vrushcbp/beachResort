import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link} from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'

export class SingleRoom extends Component {

    constructor(props) 
    {
        super(props)
        console.log(2,this.props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType=RoomContext;
    componentDidMount()
    {

    }
    
    render() {
        const {getRooms}=this.context
        const room=getRooms(this.state.slug);
        // console.log('single room',room)
        if(!room)
        {
            return<div className="error">
                <h4>No such room could be found</h4>
                <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
            </div>
            
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
        const[mainImg,...defaultImg]=images
        return (
            <>
           <StyledHero img={mainImg[0]}>
               <Banner title={`${name} room`}>
                   <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
               </Banner>
           </StyledHero>
           <section className="single-room">
               <div className="single-room-images">
                   {defaultImg.map((item,index)=>{
                       return <img key={index} src={item} alt={name}/>
                   })}
               </div>
                <div className="single-room-info">
                   <article className="desc">
                       <h3>Details</h3>
                       <p>{description}</p>
                   </article>
                   <article className="info">
                       <h3>info</h3>
                       <h6>price:${price}</h6>
                       <h6>size:{size} SQFT</h6>
                       <h6>
                       max capacity:{
                           capacity>1? `${capacity} people`: `${capacity} person`
                       }
                       </h6>
                       <h6>
                       {pets?"pets are allowed":"No pets are allowed"}
                       </h6>
                       <h6>{breakfast && "free breakfast included"}</h6>
                   </article>
                </div>
           </section>
           <section className="room-extras">
               <h6>extras</h6>
               <ul className="extras">
                  {extras.map((item,index)=>{
                      return<li key={index}>- {item}</li>
                  })} 
               </ul>
           </section>

           </>
        )
    }
}

export default SingleRoom
