import React,{Component} from 'react';
import classes from './SiteCarousal.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
  
class SiteCarousal extends Component{
    state={ activeIndex: 0 };
    
    next = ()=>{
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.data.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous =()=>{
      
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? this.props.data.length - 1 : this.state.activeIndex - 1;
            this.setState({ activeIndex: nextIndex });
          
    }
    goToIndex=(newIndex)=>{
        if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }
    onExiting=()=> {
        this.animating = true;
      }
    
      onExited=()=> {
        this.animating = false;
      }
    render(){
       const slides = this.props.data.map(item=>{
           return(<CarouselItem key={item.carouselImage} onExiting={this.onExiting} onExited={this.onExited}>
               <a href={'/details'+item.detailKey} >
               <img src={item.carouselImage} alt={item.altText} style={{width:'100%',height:'100%'}}></img>
               </a>
           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
           </CarouselItem>);
       })
        return(<Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
           <CarouselIndicators items={this.props.data} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction='next' directionText='Previous' onClickHandler={this.previous}/>
            <CarouselControl direction='next' directionText='Next' onClickHandler={this.next}/>
        </Carousel>);
    }
}


export default SiteCarousal;