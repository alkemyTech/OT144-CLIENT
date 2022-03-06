import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleComponent from "../../title/TitleComponent";
import DetailContent from "./DetailContent";
import { getNewsById } from '../../../Services/Http-news';
import Skeleton from '../../UI/Skeleton';

const DetailNew = () => {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const sizeSkeleton = {
    sizeSkeletonTitle : { width: '80%', height: '30px', radius: '5px' },
    sizeSkeletonImg : { width: '90%', height: '400px', radius: '' },
    sizeSkeletonTxt : { width: '80%', height: '80px', radius: '' }
  }

  const urlParams = useParams();

  useEffect(
    ()=>{
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
    },
    []
  )

  return (
    <main>
      {loading ?  (
        <>
          <Skeleton skeletonSize={sizeSkeleton.sizeSkeletonTitle}/>
          <Skeleton skeletonSize={sizeSkeleton.sizeSkeletonImg}/>
          <Skeleton skeletonSize={sizeSkeleton.sizeSkeletonTxt}/>
        </>
      ) 
      : 
      (
        <>
          <TitleComponent
            title={data.name}
            img={data.image}
            nameImg={data.name}
          />
          <DetailContent data={data} />
        </>
      )}
    </main>
  );
};

export default DetailNew;
