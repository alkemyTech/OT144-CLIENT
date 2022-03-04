import React from "react";
import './stylesSkeleton.css';

function Skeleton(props){

    const styles = {
        sizeSkeleton: {
            width: props.skeletonSize.width,
            height: props.skeletonSize.height,
        }
    }

    return(
        <section className="containerSkeleton">
            <div className="skeleton" style={styles.sizeSkeleton}></div>
        </section>
    )
}

export default Skeleton