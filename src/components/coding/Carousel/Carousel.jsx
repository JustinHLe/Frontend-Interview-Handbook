import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const MyCarousel = () => {
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState("")
    const [imageIndex, setImageIndex] = useState(0)
    useEffect(() => {
        async function fetchData(){
            const data = await axios.get(`https://picsum.photos/v2/list`)
            const imageObj = data.data
            const imageUrls = []
            imageObj.forEach((el) => {
                imageUrls.push(el.download_url)
            })
            console.log(imageUrls)
            setImages(imageUrls)
        }
        fetchData()
    },[])
    useEffect(() => {
        if(imageIndex < 0){
            setImageIndex(images.length - 1)
        }
        if(imageIndex === images.length){
            setImageIndex(0)
        }
        setCurrentImage(images[imageIndex])
    }, [images, imageIndex])

    const handleEvent = (e) => {
        console.log(e)
        if(e.target.innerHTML === "Next"){
            setImageIndex(imageIndex => Number(imageIndex) + 1)
        }
        else if(e.target.innerHTML === "Back"){
            setImageIndex(imageIndex => Number(imageIndex) - 1)
        }
        else if(e.target.id.includes("image-") &&
            e.target.innerHTML !== "Back" &&
            e.target.innerHTML !== "Next"
        ){
            setImageIndex(e.target.id.substr(6))
        }
    }
    return (
        <>
            <Carousel>
            {images.map((url,index) => {
                return (
                <Carousel.Item>
                    <img
                        style={{
                            display: 'block',
                            width: "100vw",
                            height: "100vh"
                        }}
                        src={url}
                        alt={`{index + 1} slide`}
                    />
                    <Carousel.Caption>
                        <h3>{index + 1} slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>    
                )
            })}
        </Carousel>
        <section 
            onClick={handleEvent}
            style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            position: "relative"
        }}>
        <div style={{
            position: "absolute",
            top: "50%",
            right: "100px",
            color: "gray"
        }}>
            Next
        </div>
        <div style={{
            position: "absolute",
            top: "50%",
            left: "100px",
            color: "gray"
        }}>
            Back
        </div>
        <div style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, 0)"
        }}>
            {images.map((el, index) => {
                return(
                <span 
                    id={`image-${index}`}
                    style={{
                    color: "red",
                    margin: "0 10px"
                    }}>
                    hi
                </span>
                )
            })}
        </div>
        <img
            style={{
                width: "100vw",
                height: "100vh"
            }}
            src={currentImage}
            alt={`{index + 1} slide`}
        />
        </section>     
        </>
    )
}