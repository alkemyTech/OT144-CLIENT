import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleComponent from "../../title/TitleComponent";
import DetailContent from "./DetailContent";
import { getNewsById } from '../../../Services/newsService';
import Skeleton from '../../UI/Skeleton/Skeleton';
import './stylesDetailNew.css'

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

  const urlParams = useParams()

  const actionGet = async () => {
    try{
      const response = await Promise.resolve(getNewsById(urlParams.id))
      if(response.data){
        setLoading(false)
        return (setData(response.data.data))
      }
    }catch(error) {
      return {
        status: error.response.status,
        error: error.message,
        data: error.response.data,
      }
    }  
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
      actionGet()
    }
  } 
  /*Fin determinar altura elemento*/

  return (
    <main>
      {loading ?  (
        <>
        <div className="spaceScroll"></div>
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
