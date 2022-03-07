import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleComponent from "../../title/TitleComponent";
import DetailContent from "./DetailContent";
import { getNewsById } from '../../../Services/Http-news';
import Skeleton from '../../UI/Skeleton';

const DetailNew = () => {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  /*Determinar altura elemento*/
  const refCom = useRef(null)
  const [height, setHeight] = useState()
  const [scrollY, setScrollY] = useState(0)
  const [stopScroll, setStopScroll] = useState(true)
  /*Fin determinar altura elemento*/

  const sizeSkeleton = {
    sizeSkeletonTitle : { width: '80%', height: '30px', radius: '5px' },
    sizeSkeletonImg : { width: '90%', height: '400px', radius: '' },
    sizeSkeletonTxt : { width: '80%', height: '80px', radius: '' }
  }

  const urlParams = useParams();

  const peticionGet = ()=>{
    getNewsById(urlParams.id)
    var cast = Promise.resolve(getNewsById(urlParams.id))
    cast.then(res => {
      console.log('data', res.data)
      if(res.data){
        setData(res.data.data)
        setLoading(false)
      }
    })
    .catch(error => {
      console.log(error.message)
    })  
  }

  /*Determinar altura elemento*/
  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(
    ()=>{
      if(stopScroll === true){
        watchScroll();

        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        setHeight(refCom.current?.clientHeight)

        mostrarScroll()

        return () => {
          window.removeEventListener("scroll", logit);
        }
      }
  },
  [scrollY]
  )

  const mostrarScroll = () => {
    if(scrollY > height){
      setStopScroll(false)
      peticionGet()
    }
  } 
  /*Fin determinar altura elemento*/

  return (
    <main>
      {loading ?  (
        <>
        <div style={{ width: "100%", height:'1000px'}}></div>
        <div ref={refCom}>
          <Skeleton skeletonSize={sizeSkeleton.sizeSkeletonTitle}/>
          <Skeleton skeletonSize={sizeSkeleton.sizeSkeletonImg}/>
          <Skeleton skeletonSize={sizeSkeleton.sizeSkeletonTxt}/>
        </div>
        </>
      ) 
      : 
      (
        <>
        <div style={{ width: "100%", height:'1000px'}}></div>
        <div ref={refCom}>
          <TitleComponent
            title={data.name}
            img={data.image}
            nameImg={data.name}
          />
          <DetailContent data={data} />
        </div>
        </>
      )}
    </main>
  );
};

export default DetailNew;
